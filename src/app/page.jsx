import Image from "next/image";
import styles from "./home.module.css";
import Button from '@mui/material/Button';
const Home = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles.section} ${styles.part1}`}>

				<div className={styles.textContainer}>
					<h1 className={styles.title}>Осинови, не купувай.</h1>
					<p className={styles.information}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
						blanditiis adipisci minima reiciendis a autem assumenda dolore.
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
						blanditiis adipisci minima reiciendis a autem assumenda dolore.
					</p>
					<div className={styles.buttons}>

						<Button className={styles.button}>Learn More</Button>
						<Button className={styles.button}>Contact</Button>

					</div>
				</div>
				<div className={styles.imgContainer}>
					<Image src="/two-kittens.jpg" alt="" fill />
				</div>
			</div>
			<div className={`${styles.section} ${styles.part2}`}>
				<div className={styles.textContainer}>
					<h5 className={styles.h5}>Осинови, не купувай.</h5>
					<p className={styles.information}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
						blanditiis adipisci minima reiciendis a autem assumenda dolore.
					</p>
					<h5 className={styles.h5}>Осинови, не купувай.</h5>
					<p className={styles.information}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
						blanditiis adipisci minima reiciendis a autem assumenda dolore.
					</p>
				</div>
				<div className={styles.textContainer}>
					<h5 className={styles.h5}>Осинови, не купувай.</h5>
					<p className={styles.information}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
						blanditiis adipisci minima reiciendis a autem assumenda dolore.
					</p>
					<h5 className={styles.h5}>Осинови, не купувай.</h5>
					<p className={styles.information}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
						blanditiis adipisci minima reiciendis a autem assumenda dolore.
					</p>
				</div>
			</div>


			<div className={`${styles.section} ${styles.part4}`}>

				<h5 className={styles.h5}>Осинови, не купувай.</h5>
				<p className={styles.information}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
					blanditiis adipisci minima reiciendis a autem assumenda dolore.
				</p>
				<Image src="/two-cats.jpg" alt="" fill className={styles.roundedImg} />
			</div>
			<div className={`${styles.section} ${styles.part3}`}>
				<div className={styles.leftContainer}>
					<div className={styles.textContainer}>
						<h1 className={styles.h5}>Осинови, не купувай.</h1>
						<p className={styles.information}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
						</p>
					</div>
					<Image src="/girl-with-cat.jpg" className={styles.roundedImg} width={400} height={300} alt="" />
					<div className={styles.buttons}>
						<Button className={styles.button}>Learn More</Button>
						<Button className={styles.button}>Contact</Button>

					</div>
				</div>
			
			</div>
			<div className={`${styles.section} ${styles.part6}`}>

			<div className={styles.rightContainer}>
					<div className={styles.centrateRight}>
						<Image src="/family-with-dog.jpg" className={styles.roundedImg} width={400} height={300} alt="" />
						<div className={styles.buttons}>
							<Button className={styles.button}>Learn More</Button>
							<Button className={styles.button}>Contact</Button>
						</div>
					</div>
					<div className={styles.textContainer}>
						<h1 className={styles.h5}>Осинови, не купувай.</h1>
						<p className={styles.information}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
						</p>
					</div>
				</div>
</div>
			<div className={`${styles.section} ${styles.part5}`}>
			<div className={styles.bottomTextContainer}>
						{/* <h1 className={styles.h5}>Осинови, не купувай.</h1> */}
						<p className={styles.information}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
						</p>
					</div>
				</div>
		</div>
	);
};


/*

*/

export default Home;
