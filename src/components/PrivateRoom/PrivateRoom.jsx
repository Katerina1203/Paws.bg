'use client';

import { io } from 'socket.io-client';
import styles from './privateroom.module.css';
import React, { useState, useEffect } from 'react';

const socket = io("http://192.168.1.8:5000");

const PrivateRoom = ({ user, room }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (room) {
      socket.emit('join private', room);

      socket.on('private message', (messageData) => {
        console.log("private message executed successfully");
        setMessages((prevMessages) => [...prevMessages, messageData]);
      });

      socket.on('existing messages', (fetchedMessages) => {
        console.log("existing messages executed successfully");
        setMessages(fetchedMessages);
      });

      return () => {
        console.log("exit from the component");
        socket.off('private message');
        socket.off('existing messages');
      };
    }
  }, [room]);

  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    const messageData = {
      name: user?.username || 'Anonymous',
      message: newMessage,
      room: room,
      timestamp: new Date().toLocaleTimeString(),
    };

    socket.emit('private message', { room, message: messageData });
    setNewMessage('');
  };

  return (
    <div className={styles.chatContainer}>
      <h1 className={styles.chatHeader}>Private Chat</h1>
      <div className={styles.messagesContainer}>
      {messages.map((messageData, index) => (
  <div key={index} className={styles.message}>
    <strong>{messageData.name}:</strong> {messageData.message} 
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
  );
};

export default PrivateRoom;