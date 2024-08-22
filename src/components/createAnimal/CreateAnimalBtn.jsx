"use client";
import React, { useState } from 'react'
import { PlusCircle } from "../svgs";
import CreateAnimalModal from './CreateAnimalModal';
import styles from "./createanimalmodal.module.css"

export default function CreateAnimalBtn() {
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen((o) => !o)
    }
    return (
        <>
            <div>
                <button onClick={handleOpenModal}>
                    <PlusCircle className={styles.addBtn} />
                </button>
            </div>
            <CreateAnimalModal open={open} setOpen={setOpen}/>
        </>
    )
}
