"use client"; // Ensure this file is treated as a client-side component
import { MessageCircle } from "lucide-react"
import { useRouter } from 'next/navigation';

type Props = {
    currentUserId: string;
    wantedUserId: string;
};


const PrivateChatButton = ({ currentUserId, wantedUserId }: Props) => {
    const router = useRouter();

    const handleMessages = () => {
        const room = [currentUserId, wantedUserId].sort().join('-');
        router.push(`/privatechat?room=${room}`);
    };

    return (
        <button onClick={handleMessages} >
            <MessageCircle className="h-8 w-8 text-base leading-none hover:bg-[#f0f0f0] hover:rounded-[5px]" />
        </button>
    );
};

export default PrivateChatButton;
