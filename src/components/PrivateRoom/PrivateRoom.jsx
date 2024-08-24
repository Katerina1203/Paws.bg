"use client"
import React, { useState, useEffect, useMemo } from 'react';
import { io } from 'socket.io-client';
import styles from './privateroom.module.css';

const socket = io("http://192.168.1.8:5000");

const PrivateRoom = ({ currentUser, room, otherUser }) => {
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');
	const [activeRoom, setActiveRoom] = useState(room);

	useEffect(() => {
		if (activeRoom) {
			//TODO: checks if the active room is valid
			socket.emit('join private', activeRoom);

			socket.on('private message', (messageData) => {
				setMessages((prevMessages) => [...prevMessages, messageData]);
			});

			socket.on('existing messages', (fetchedMessages) => {
				if (typeof fetchedMessages == "string") return;
				setMessages(fetchedMessages);
			});

			return () => {
				socket.off('private message');
				socket.off('existing messages');
			};
		}
	}, [activeRoom]);

	const sendMessage = () => {
		if (newMessage.trim() === '') return;

		const messageData = {
			senderId: currentUser._id,
			name: currentUser?.username || 'Anonymous',
			message: newMessage,
		};

		socket.emit('private message', { room: activeRoom, message: messageData });
		setNewMessage('');
	};

	const takeNameFromId = (id) => {
		const user = currentUser._id === id ? currentUser : otherUser;
		return user
	}
	return (
		<div className={styles.container}>
			{/* <Sidebar activeRoom={activeRoom} setActiveRoom={setActiveRoom} /> */}
			<div className={styles.chatContainer}>
				<h1 className={styles.chatHeader}>Private Chat</h1>
				<div className={styles.messagesContainer}>
					{messages.map((messageData, index) => (
						<div key={index} className={styles.message}>
							<strong>{takeNameFromId(messageData.name).username}:</strong> {messageData.message}
							<span className={styles.timestamp}>{messageData.timestamp}</span>
						</div>
					))}
				</div>
				<div className={styles.inputContainer}>
					<input
						type="text"
						value={newMessage}
						onChange={(e) => setNewMessage(e.target.value)}
						className={styles.input}
						placeholder="Type a message..."
					/>
					<button onClick={sendMessage} className={styles.btn}>Send</button>
				</div>
			</div>
		</div>
	);
};

export default PrivateRoom;
