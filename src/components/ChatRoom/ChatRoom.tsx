"use client";
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Session } from "next-auth";
import { ObjectId } from 'mongoose';

import { getUser } from '@/lib/data';
type ChatRoomProps = {
  userId: ObjectId ;
  signalId: ObjectId;  
  userName:String;
};

const socket = io("http://localhost:5000"); // Adjust to your server URL

const ChatRoom = ({ userId,userName, signalId }: ChatRoomProps) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Join the signal-specific room
    socket.emit('join signal', signalId);

    // Listen for incoming messages in the signal room
    socket.on('signal message', (messageData) => {
      setMessages((prevMessages) => [...prevMessages, messageData]);
    });

    // Load existing messages when joining the room
    socket.on('existing messages', (fetchedMessages) => {
      setMessages(fetchedMessages);
    });

    return () => {
      socket.off('signal message');
      socket.off('existing messages');
    };
  }, [signalId]);

  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    const messageData = {
      name: userName || 'Anonymous',
      message: newMessage,
      senderId: userId || '',
    };

    // Emit the message to the signal-specific room
    socket.emit('signal message', {
      room: signalId,
      message: messageData,
    });

    setNewMessage('');
  };

  return (
    <div className="max-w-lg mx-auto p-5 bg-white rounded-lg shadow-lg">
      <h1 className="text-center text-2xl text-gray-800 font-semibold mb-5">Дискусия за сигнал</h1>
      <div className="max-h-96 overflow-y-auto p-3 bg-white border border-gray-300 rounded-lg mb-5">
        {messages.map((messageData, index) => (
          <div key={index} className="p-3 mb-3 rounded-lg bg-gray-200">
            <strong>{messageData.name}:</strong> {messageData.message}
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-3">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow p-3 border border-gray-300 rounded-lg"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="p-3 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
