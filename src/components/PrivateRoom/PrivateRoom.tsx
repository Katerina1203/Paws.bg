"use client";
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import styles from './privateroom.module.css';

import { IUser } from '@/types/models';
import { ObjectId } from 'mongoose';

const socket = io("http://localhost:5000");

type Params = {
	currentUser: IUser;
	room: string;
	otherUser: IUser;
};

type Message = {
    name: string;
    message: string;
    timestamp: number;
};

const PrivateRoom = ({ currentUser, room, otherUser }: Params) => {
	const [messages, setMessages] = useState<Message[]>([]);
	const [newMessage, setNewMessage] = useState<string>('');
	const [activeRoom, setActiveRoom] = useState(room);

	useEffect(() => {
		const socketInstance = io("http://localhost:5000");

		if (activeRoom) {
			socketInstance.emit('join private', activeRoom);

			socketInstance.on('private message', (messageData) => {
				setMessages((prevMessages) => [...prevMessages, messageData]);
			});

			socketInstance.on('existing messages', (fetchedMessages) => {
				if (typeof fetchedMessages === "string") return;
				setMessages(fetchedMessages);
			});

			return () => {
				socketInstance.disconnect();
				socketInstance.off('private message');
				socketInstance.off('existing messages');
			};
		}
	}, [activeRoom]);

	const sendMessage = () => {
		if (newMessage.trim() === '') return;

		const messageData = {
			senderId: currentUser._id,
			name: currentUser.username ,
			message: newMessage,
			timestamp: Date.now(), 
		};

		socket.emit('private message', { room: activeRoom, message: messageData });
		setNewMessage('');
	};

	const takeNameFromId = (id: ObjectId | string) => {

		if (typeof id === "string" && id === currentUser.username) return currentUser;
		if (typeof id === "string" && id === otherUser.username) return otherUser;
		return currentUser._id === id ? currentUser : otherUser;
	};

	return (
		<div className={styles.container}>
			<div className={styles.chatContainer}>	
				<h1 className={styles.chatHeader}>{currentUser.username}</h1>
				<h1 className={styles.chatHeader}>{otherUser.username}</h1>
				<div className={styles.messagesContainer}>
					{messages.map((messageData, index) => (
						<div key={index} className={styles.message}>
							<strong>{takeNameFromId(messageData.name).username}:</strong> 
							<span className={styles.message}>
							{messageData.message}
							</span>
							<span className={styles.timestamp}>
								{`   ${messageData.timestamp}`}
							</span>
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
