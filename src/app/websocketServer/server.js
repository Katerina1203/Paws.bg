// const { createServer } = require("http");
// const { Server } = require("socket.io");

// const httpServer = createServer();
// const io = new Server(httpServer, {
//     cors: {
//         origin: '*',
//         methods: ['GET', 'POST']
//     }
// });

// io.on('connection', (socket) => {
//     console.log('A user connected');
    
//     // Handle chat messages for all connected users
//     socket.on('chat message', (message) => {
//       io.emit('chat message', message); 
//     });
  
//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     });
//   });

//   exports.io = io;
// httpServer.listen(5000, () => {
//     console.log("Server listening on port 5000");
// });
// server.js
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

let messages = []; // In-memory storage for messages

io.on('connection', (socket) => {
  console.log('A user connected');

  // Send existing messages to the newly connected user
  socket.on('fetch messages', () => {
    socket.emit('existing messages', messages);
  });

  // Handle chat messages for all connected users
  socket.on('chat message', (message) => {
    messages.push(message); // Store the message
    io.emit('chat message', message); // Broadcast to all connected users
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

httpServer.listen(5000, () => {
  console.log("Server listening on port 5000");
});
