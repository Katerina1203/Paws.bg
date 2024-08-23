import PrivateRoom from '@/components/PrivateRoom/PrivateRoom';

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getUser } from '@/lib/data';
const ChatRoomPage = async ({searchParams}) => {
    const session = await auth();

	const dbUser = await getUser(session?.user.email)
    if (!session) {
        redirect("/login");
    }

    return <PrivateRoom user={dbUser} room={searchParams.room} />;
};

export default ChatRoomPage;