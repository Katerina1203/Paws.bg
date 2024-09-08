
import mongoose from "mongoose";
import { createServer } from "http";
import { Server } from "socket.io";
import handleSocketConnection from "./socketHandlers.mjs";
import dotenv from 'dotenv';

dotenv.config();

let connection = { isConnected: false };

const connectDB = async () => {
	if (connection.isConnected) {
		
		console.log('Already connected to MongoDB');
		return;
	}

	try {

		const db = await mongoose.connect(process.env.MONGODB);
		
		connection.isConnected = db.connections[0].readyState;
		console.log('Connected to MongoDB');
	} catch (e) {
		console.error('Failed to connect to MongoDB', e);
	}
};


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