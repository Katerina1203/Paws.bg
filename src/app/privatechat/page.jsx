import PrivateRoom from '@/components/PrivateRoom/PrivateRoom';

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getUser, getUserById } from '@/lib/data';
const ChatRoomPage = async ({ searchParams }) => {
    const session = await auth();
    const dbUser = await getUser(session?.user.email)

    const pUsers = searchParams.room.split("-")
    const user1 = await getUserById(pUsers[0])
    const user2 = await getUserById(pUsers[1])

    
    const otherUser = pUsers.includes(dbUser._id) ? user1 : user2
    

    

    if (!session) {
        redirect("/login");
    }
    console.log(searchParams.room);


    return <PrivateRoom currentUser={dbUser} room={searchParams.room} otherUser={otherUser} />;
};

export default ChatRoomPage;