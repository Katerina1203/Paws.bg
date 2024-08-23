'use client';

import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import styles from './chatroom.module.css';

const socket = io("http://192.168.1.8:5000");

const ChatRoom = ({ session }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  useEffect(() => {
    socket.emit('join general');

    socket.on('chat message', (messageData) => {
      setMessages((prevMessages) =>
        [...prevMessages, messageData]);
    });

    socket.on('existing messages', (fetchedMessages) => {
      setMessages(fetchedMessages);
    });
    return () => {
      socket.off('chat message');
      socket.off('existing messages');
    };
  }, []);


  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    const messageData = {
      name: session?.user?.name || 'Anonymous',
       message: newMessage, };
       socket.emit('chat message', messageData);   
        setNewMessage('');  };
    return (
      <div className={styles.chatContainer}>
        <h1 className={styles.chatHeader}>Chat</h1>
        <div className={styles.messagesContainer}>
          {messages.map((messageData, index) => (
            <div key={index} className={styles.message}>
              <strong>{messageData.name}:</strong> {messageData.message}
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

  export default ChatRoom;