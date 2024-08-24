"use client"; // Ensure this file is treated as a client-side component
import { Messages } from "../svgs";
import { useRouter } from 'next/navigation';
import styles from "./privatechatbutton.module.css"
const PrivateChatButton = ({ currentUserId, wantedUser }) => {
    const router = useRouter();

    const handleMessages = () => {    
        console.log(currentUserId);
        
        const room = [currentUserId, wantedUser._id.toString()].sort().join('-'); 
        router.push(`/privatechat?room=${room}`); 
    };

    return (
        <button onClick={handleMessages} >
        <Messages className={styles.actionButton} />
    </button>
    );
};

export default PrivateChatButton;
