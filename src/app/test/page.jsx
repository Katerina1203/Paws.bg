import { getSession } from '@/lib/action'; 
import ChatComponent from '@/components/ChatComponent/ChatComponent';

export default async function ChatRoom() {
  const session = await getSession();

  return (
    <div>
      <ChatComponent session={session} />
    </div>
  );
}
