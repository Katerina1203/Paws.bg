"use client";

import styles from './contact.module.css';
import Button from '@mui/material/Button';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Message sent!');
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/two-cats.jpg" alt="Cats" fill className={styles.img} />
      </div>
      
      <div className={styles.fieldsContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" placeholder='Name' required />
          <input type="email" placeholder='Email Address' required />
          <input type="email" placeholder='Confirm Email Address' required />
          <Button className={styles.button} variant="contained" type="submit">Send</Button>
        </form>

        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          <p>If you have any questions or need support, feel free to reach out to us:</p>
          <p><strong>Email:</strong> support@example.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
        </div>

        <div className={styles.mapContainer}>
          <h2>Our Location</h2>
          <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2286540842567!2d-122.40401668468945!3d37.78583977975745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b6f0b9cf7%3A0x11db13d48cb5f33c!2s1%20Market%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2s!4v1639340474457!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
            className={styles.map}
          ></iframe>
        </div>

        <div className={styles.socialMedia}>
          <h2>Follow Us</h2>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
