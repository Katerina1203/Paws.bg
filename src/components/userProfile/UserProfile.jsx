// "use client"
import { getUserById, getAnimalsByUserId, getUser } from "@/lib/data";
import styles from "./userprofile.module.css";
import Image from "next/image";
import CreateAnimalModal from "../createAnimal/CreateAnimalModal";
import { handleLogout } from '@/lib/action';
import { auth } from "@/auth";
import AnimalCard from "../animalCard/AnimalCard";
import { PlusCircle, Logout, Messages, Settings } from "../svgs";

import PrivateChatButton from "../PrivateChatButton/PrivateChatButton";
import CreateAnimalBtn from "../createAnimal/CreateAnimalBtn";
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';

export default async function UserProfile({ userID }) {
    const session = await auth();


    const currentUser = await getUser(session.user.email);
    const wantedUser = await getUserById(userID);

    if (!wantedUser) {
        console.error("User not found");
        return null;
    }


    const animals = await getAnimalsByUserId(wantedUser._id.toString());

    return (
        <div className={styles.container}>
            <div className={styles.profileCard}>
                <div className={styles.imgContainer}>
                    <Image
                        src={wantedUser.img|| "/noPhoto.png"}
                        alt={`${wantedUser.username}'s profile`}
                        className={styles.profileImage}
                        width={200}
                        height={200}
                    />
                </div>
                <h1 className={styles.name}>{wantedUser.username}</h1>
                <p className={styles.email}>{wantedUser.email}</p>

                <div className={styles.icons}>
                    <div className={styles.dropdown}>
                        <button className={styles.actionButton}>
                            <Settings className={styles.actionButton} />
                        </button>
                        <div className={styles.dropdownContent}>
                            <a href="#">Change Password</a>
                            <a href="#">Privacy Settings</a>
                            <a href="#">Notification Preferences</a>
                        </div>
                    </div>

                    <PrivateChatButton currentUserId={currentUser._id} wantedUserId={wantedUser._id} />
                    <form action={handleLogout} className={styles.formLogoutBtn}>
                        <button className={styles.actionButton} type="submit">
                            <Logout className={styles.actionButton} />
                        </button>
                    </form>
                </div>
            </div>

            <div className={styles.postsGrid}>
                {animals.map((animal) => (
                    <div key={animal._id} className={styles.postCard}>
                        <AnimalCard animal={animal} />
                        <p className={styles.postName}>{animal.description}</p>
                    </div>
                ))}
            </div>
            <CreateAnimalBtn/>
        </div>
    );
}