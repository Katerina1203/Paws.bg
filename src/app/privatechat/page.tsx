import PrivateRoom from '@/components/PrivateRoom/PrivateRoom';

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getUser, getUserById } from '@/lib/data';
type Props = {
    searchParams: any;
}
const ChatRoomPage = async ({ searchParams }: Props) => {
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
        redirect("/login");
    }

    const dbUser = await getUser(session.user.email);
    if (!dbUser || dbUser._id == undefined) {
        redirect("/");
        return;
    }
    const pUsers = searchParams.room.split("-") as string[];
    
    const otherUserId = pUsers.find((user) => user !== dbUser._id?.toString());
    
    const otherUser = await getUserById(otherUserId!);
    if (!otherUser) {
        redirect("/");
        return;
    }

    return <PrivateRoom currentUser={dbUser} room={searchParams.room} otherUser={otherUser} />;
};


export default ChatRoomPage;