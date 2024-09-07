"use client";
import styles from './contact.module.css';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react"
import { FormEvent } from 'react';

const Contact = () => {
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		alert('Message sent!');
	};

	return (
		<div className={styles.container + " " + "max-w-full flex-col md:flex-row"}>
			<div className={styles.imgContainer}>
				<Image src="/img/two-cats.jpg" alt="Cats" fill className={styles.img} />
			</div>

			<div className={styles.fieldsContainer}>
				<form onSubmit={handleSubmit} className={styles.form}>
					<Input type="text" placeholder='Name' required />
					<Input type="email" placeholder='Email Address' required />
					<Input type="email" placeholder='Confirm Email Address' required />
					<Button className={styles.button} variant="outline" type="submit">Send</Button>
				</form>

				<div className={styles.contactInfo}>
					<h2>Информация за контакт</h2>
					<p>Ако имате въпроси или се нуждаете от помощ, не се колебайте да се свържете с нас:</p>

					<p><strong>Email:</strong> support@example.com</p>
					<p><strong>Phone:</strong> (123) 456-7890</p>
				</div>

				<div className={styles.mapContainer}>
					<h2>Нашата Локация</h2>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d518.3414884296003!2d23.31622313035926!3d42.6998615977523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85682c6c4d0f%3A0x6c4dc6efdbbd84a2!2z0KHQvtGE0LjRjyDRhtC10L3RgtGK0YAsINCx0YPQuy4g4oCe0KXRgNC40YHRgtC-INCR0L7RgtC10LLigJwgNjgsIDEwMDAg0KHQvtGE0LjRjw!5e0!3m2!1sbg!2sbg!4v1724594817495!5m2!1sbg!2sb"
						allowFullScreen
						loading="lazy"
						className={styles.map}
					></iframe>

				</div>

				<div className={styles.socialMedia}>
					<h2>Последвайте ни</h2>
					<div className={styles.socialIcons}>
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
							<Facebook className={styles.icon} />
						</a>
						<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
							<Twitter className={styles.icon} />
						</a>
						<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
							<Instagram className={styles.icon} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;

<Facebook />