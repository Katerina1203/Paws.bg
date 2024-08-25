"use client"; // Ensure this file is treated as a client-side component
import { Messages } from "../svgs";
import { useRouter } from 'next/navigation';
import styles from "./privatechatbutton.module.css"
const PrivateChatButton = ({ currentUserId, wantedUserId }) => {
    const router = useRouter();

    const handleMessages = () => {    
        const room = [currentUserId, wantedUserId].sort().join('-'); 
        router.push(`/privatechat?room=${room}`); 
    };

    return (
        <button onClick={handleMessages} >
        <Messages className={styles.actionButton} />
    </button>
    );
};

export default PrivateChatButton;
