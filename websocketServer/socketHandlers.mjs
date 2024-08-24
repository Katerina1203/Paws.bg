import { ChatRoom, Message } from "../src/lib/models.js";

const handleSocketConnection = (socket, io) => {
	// Join general room
	socket.on('join general', () => {
		socket.emit('existing messages', generalMessages);
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
			senderId: message.senderId, // Ensure you pass the sender's ID in the message object
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
