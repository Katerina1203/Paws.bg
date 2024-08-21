import { connectDB } from '@/lib/utils';
import ChatRoom from '@/lib/models';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    const { animalId, participantIds } = req.body;

    try {
      const newChatRoom = await ChatRoom.create({
        animalId,
        participants: participantIds,
        messages: [],
      });
      res.status(201).json(newChatRoom);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create chat room' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
