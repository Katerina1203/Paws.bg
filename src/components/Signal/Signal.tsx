"use client";
import { FormEvent, useState } from "react";

import GoogleMaps from "@/components/Map/Map";
import styles from "./signal.module.css";
import { Button } from "@/components/ui/button";
import { createSignal } from "@/lib/actions";
import ConfirmationModal from '@/components/ConfirmationModal/ConfirmationModal';

type Props = {
    user: any;
}

const Signal = ({ user }: Props) => {
    const [latitude, setLatitude] = useState(42.6977);
    const [longitude, setLongitude] = useState(23.3219);
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [signalName, setSignalName] = useState("");
    const [open, setOpen] = useState(false);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            await createSignal(signalName,description, latitude, longitude, user._id);

            setOpen(true);
        } catch (error) {
            console.error('Error submitting signal:', error);
            alert('Failed to submit signal.');
        }
    };

    const handleClose = () => {
        setOpen(false);


    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h1 className={styles.h1}>Подай Сигнал</h1>
                    <p className={styles.p}>
                        Ако сте попаднали на животно, което се нуждае от помощ, моля, използвайте тази форма, 
                        за да подадете сигнал. Информацията, която предоставяте, ще помогне на други хора бързо да 
                        намерят животното и да предприемат необходимите действия.
                    </p>
                    <input
                        type="text"
                        placeholder="Кратко описание на сигнала"
                        required
                        className={styles.input}
                        value={signalName}
                        onChange={(e) => setSignalName(e.target.value)}
                    />
                    <textarea
                        placeholder="Детайли"
                        required
                        className={styles.textarea}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Button className={styles.button} variant="outline" type="submit">
                        Изпрати
                    </Button>
                </form>
            </div>
            <div className={styles.mapContainer}>
                <GoogleMaps
                    address={address}
                    setAddress={setAddress}
                    latitude={latitude}
                    longitude={longitude}
                    setLatitude={setLatitude}
                    setLongitude={setLongitude}
                />
            </div>
            <ConfirmationModal
                open={open}
                onClose={handleClose}
                title="Signal Created"
                description="Your signal has been created successfully!"
                actionText="OK"
            />
        </div>
    );
};

export default Signal;
