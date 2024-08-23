const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

let generalMessages = []; // In-memory storage for messages
let privateMessages = {}; // In-memory storage for private room messages

io.on('connection', (socket) => {
  console.log('A user connected');

  // Join general room
  socket.on('join general', () => {
    socket.emit('existing messages', generalMessages);
  });

  // Join a private room
  socket.on('join private', (room) => {
    socket.join(room);
    if (privateMessages[room]) {
      socket.emit('existing messages', privateMessages[room]);
    } else {
      privateMessages[room] = [];
    }
  });

  // Handle chat messages for all connected to general room
  socket.on('chat message', (message) => {
    generalMessages.push(message); // Store the message
    io.emit('chat message', message); // Broadcast to all connected users
  });

  // Handle chat messages for private rooms
  socket.on('private message', ({ room, message }) => {
    const messageData = { name: message.name, message: message.message }; // Ensure message structure
    privateMessages[room].push(messageData); // Store the message
    io.to(room).emit('private message', messageData); // Broadcast to all users in the room
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

httpServer.listen(5000, () => {
  console.log("Server listening on port 5000");
});