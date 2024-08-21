// pages/api/chat/getChatRooms.js
import { connectDB } from '@/lib/utils';
import ChatRoom from '@/lib/models';


export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    const { userId } = req.query;

    try {
      const chatRooms = await ChatRoom.find({ participants: userId });
      res.status(200).json(chatRooms);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch chat rooms' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
