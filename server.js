import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { Server as SocketIOServer } from 'socket.io'; // Use named import for Socket.io Server

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const io = new SocketIOServer(server); // Instantiate the Socket.io server

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('joinRoom', (roomId) => {
      socket.join(roomId);
    });

    socket.on('sendMessage', async (message) => {
      const { chatRoomId, senderId, content } = message;

      // Handle message saving and emitting logic here
      io.to(chatRoomId).emit('receiveMessage', {
        senderId,
        content,
        timestamp: new Date(),
      });
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });

    console.log('> Ready on http://localhost:3000');

});
