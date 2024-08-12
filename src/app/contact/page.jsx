"use client";

import styles from './contact.module.css';
import Button from '@mui/material/Button';
import Image from "next/image";
const Contact = () => {
  return <div className={styles.container}>
    <div className={styles.imgContainer}>
   <Image src="/two-cats.jpg" alt="" fill className={styles.img} />
</div>
<div className={styles.fieldsContainer}>
  <form action="" className={styles.form}>
    <input type="text" placeholder='Name' />
    <input type="text" placeholder='Email Address' />
    <input type="text" placeholder='Confirm Email Address' />
   <Button className={styles.button}>Send</Button>
  </form>

</div>
    </div>;
};

export default Contact;