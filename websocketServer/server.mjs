
import mongoose from "mongoose";
import { createServer } from "http";
import { Server } from "socket.io";
import handleSocketConnection from "./socketHandlers.mjs";
import dotenv from 'dotenv';
import { connectDB } from "./lib/utils";
dotenv.config();

let connection = { isConnected: false };

connectDB();


const httpServer = createServer();
const io = new Server(httpServer, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST']
	}
});

io.on('connection', (socket) => {
	handleSocketConnection(socket, io);
});


httpServer.listen(5000, () => {
	console.log("Server listening on port 5000");
});