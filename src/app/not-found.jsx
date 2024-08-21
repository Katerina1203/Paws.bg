import React from 'react';
import Link from 'next/link';
import { Typography, Paper } from '@mui/material';
import styles from './notfound.module.css';
import Image1 from '../../public/cat-and-dog-cuddling.png';
import Image from "next/image";

const NotFound = () => {
  return (
    <Paper
      elevation={3}
      className={styles.container}
    >
      <Typography variant="h2" className={styles.title}>
        <Image src={Image1} alt="Logo" width={300} height={150} />
      </Typography>
      <Typography variant="body1" className={styles.message}>
        Страницата, която се опитвате да намерите не съществува.
      </Typography>
      <Link href="/organisations" passHref>
        <Typography component="a" className={styles.link}>
          Към начална страница
        </Typography>
      </Link>
    </Paper>
  );
};

export default NotFound;
