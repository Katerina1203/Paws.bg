import { ChatRoom, Message } from "./models.js";
import mongoose from "mongoose";
const handleSocketConnection = (socket, io) => {
	socket.on('join signal', async (signalId) => {
        try {
            let signalRoom = await ChatRoom.findOne({ name: signalId });


            // If the room doesn't exist, create a new one
            if (!signalRoom) {
                signalRoom = new ChatRoom({
                    name: signalId, 
                    participants: []
                });
                await signalRoom.save();
            }

            // Join the room
            socket.join(signalId);

          
            const messages = await Message.find({ chatRoom: signalRoom._id }).lean();

            socket.emit('existing messages', messages.map(msg => ({
                name: msg.senderId, 
                message: msg.content,
                timestamp: msg.createdAt.toLocaleString()
            })));
        } catch (error) {
            console.error('Error joining signal room:', error);
            socket.emit('existing messages', []);
        }
    });
	socket.on('signal message', async ({ room, message }) => {
        try {
            const chatRoom = await ChatRoom.findOne({ name: room });

            const senderObjectId = mongoose.Types.ObjectId.isValid(message.senderId) ? new mongoose.Types.ObjectId(message.senderId) : null;
            if (!senderObjectId) {
                throw new Error('Invalid senderId');
            }

            const newMessage = new Message({
                senderId: senderObjectId,  
                content: message.message,
                chatRoom: chatRoom._id,
            });

            await newMessage.save();

            const messageData = {
                name: message.name,
                message: message.message,
                timestamp: newMessage.createdAt.toLocaleString()
            };

            io.to(room).emit('signal message', messageData);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
	//Join a private room
	socket.on('join private', async (room) => {
		try {
			let chatRoom = await ChatRoom.findOne({ name: room });
			if (chatRoom === null) {
				const users = room.split("-")
				const newRoom = new ChatRoom({
					name: room,
					participants: [users[0], users[1]]
				});
				await newRoom.save();
				chatRoom = newRoom;
			}
			socket.join(room);
			
			const messages = await Message.find({ chatRoom: chatRoom._id }).lean()
			console.log(messages);
			
			if (Array.isArray(messages)) {
				socket.emit('existing messages', messages.map(msg => ({
					name: msg.senderId,
					message: msg.content,
					timestamp: msg.createdAt.toLocaleString()
				})));
			}else{
				socket.emit('existing messages', "no previous messages")
			}
		} catch (error) {
			console.log(error);
		}
	});

	//Handle chat messages for private rooms
	socket.on('private message', async ({ room, message }) => {
		const chatRoom = await ChatRoom.findOne({ name: room });

		const newMessage = new Message({
			senderId: message.senderId, 
			content: message.message,
			chatRoom: chatRoom._id,
		});

		await newMessage.save();

		const messageData = {
			name: message.name,
			message: message.message,
			timestamp: newMessage.createdAt.toLocaleString()
		};

		io.to(room).emit('private message', messageData);
	});

	socket.on('disconnect', () => {
		console.log('A user disconnected');
	});
};

export default handleSocketConnection;
