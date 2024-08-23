import { getSession } from '@/lib/action'; 
import ChatRoom from '@/components/ChatRoom/ChatRoom';

export default async function ChatRoomView() {
  const session = await getSession();

  return (
    <div>
      <ChatRoom session={session} />
    </div>
  );
}
