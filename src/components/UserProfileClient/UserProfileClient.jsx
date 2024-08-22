"use client";

import { useState } from "react";
import CreateAnimalModal from "../createAnimal/CreateAnimalModal";
import { PlusCircle } from "../svgs";
import styles from "./userprofile.module.css";

export default function UserProfileClient({ user, animals }) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div>
                <button onClick={handleOpenModal}>
                    <PlusCircle className={styles.addBtn} />
                </button>
            </div>

            {modalOpen && (
                <CreateAnimalModal open={modalOpen} handleClose={handleCloseModal} />
            )}
        </>
    );
}
