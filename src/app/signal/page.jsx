"use client";
import { useState } from "react"; 

import GoogleMaps from "@/components/Map/Map";
import styles from "./signal.module.css";
import Button from "@mui/material/Button";
import { createSignal } from "@/lib/action"; // Import the function
import ConfirmationModal from '@/components/ConfirmationModal/ConfirmationModal'; // Adjust the path to your ConfirmationModal component

// const session = await auth();
// const dbUser = await getUser(session?.user.email)
const Signal = () => {
  const [latitude, setLatitude] = useState(24.799448);
  const [longitude, setLongitude] = useState(54.979021);
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState(""); // State for description
  const [open, setOpen] = useState(false); // State to control the dialog

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        await createSignal(description, latitude, longitude);
        
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
        <h1 className={styles.h1}>Lorem Ipsum</h1>
        <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <textarea
            type="text"
            placeholder="Description"
            required
            className={styles.textarea}
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <Button className={styles.button} variant="contained" type="submit">
            Send
          </Button>
        </form>
      </div>
      <div className={styles.mapContainer}>
        <GoogleMaps
          address={address}
          setAddress={setAddress}
          radius={500}
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
