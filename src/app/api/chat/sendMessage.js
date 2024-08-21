import { connectDB } from '@/lib/utils';
import ChatRoom from '@/lib/models';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    const { chatRoomId, senderId, content } = req.body;

    try {
      const chatRoom = await ChatRoom.findById(chatRoomId);
      if (!chatRoom) {
        return res.status(404).json({ error: 'Chat room not found' });
      }

      const newMessage = { senderId, content, timestamp: new Date() };
      chatRoom.messages.push(newMessage);
      await chatRoom.save();

      res.status(200).json(newMessage);
    } catch (error) {
      res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
