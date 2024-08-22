// "use client"
import { getUserById, getAnimalsByUserId } from "@/lib/data";
import styles from "./userprofile.module.css";
import Image from "next/image";
import CreateAnimalModal from "../createAnimal/CreateAnimalModal";
import { handleLogout } from '@/lib/action';
import { auth } from "@/auth";
import AnimalCard from "../animalCard/AnimalCard";
import { PlusCircle, Logout, Messages, Settings } from "../svgs";
// import { useState } from "react";

import CreateAnimalBtn from "../createAnimal/CreateAnimalBtn";
export default async function UserProfile({ userID }) {
//    const [modalOpen, setModalOpen] = useState(false);

//     const handleOpenModal = () => {
//         setShowState((setModalOpen) => setModalOpen = !setModalOpen )
//      }

    const user = await getUserById(userID);

    if (!user) {
        console.error("User not found");
        return null;
    }

    const animals = await getAnimalsByUserId(user._id.toString());

    return (
        <div className={styles.container}>
            <div className={styles.profileCard}>
                <div className={styles.imgContainer}>
                    <Image
                        src={user.img}
                        alt={`${user.username}'s profile`}
                        className={styles.profileImage}
                        width={200}
                        height={200}
                    />
                </div>
                <h1 className={styles.name}>{user.username}</h1>
                <p className={styles.email}>{user.email}</p>

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

                    <button className={styles.actionButton}>
                        <Messages className={styles.actionButton} />
                    </button>
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

            {/* <CreateAnimalModal/> */}
            {/* {modalOpen && (
             
                <CreateAnimalModal show={handleOpenModal}  />
            )} */}
        </div>
    );
}
