import styles from './singleanimal.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { getAnimalAd, getUserById } from "@/lib/data";
import { takeAllPhotosForSingleAnimal } from "@/lib/action"
import { Photo } from '@mui/icons-material';
import ImagesPreview from './ImagesPreview';

const SingleAnimal = async ({ id }) => {
	const animal = await getAnimalAd(id);
	const photos = await takeAllPhotosForSingleAnimal(id)

	if (!animal) {
		console.error("Animal not found", id);
		return <div>Animal not found.</div>;
	}

	const user = await getUserById(animal.userID);

	if (!user) {
		console.error("User not found");
		return <div>User not found.</div>;
	}

	return (
		<div className={styles.container}>
			<ImagesPreview photos={photos}/>

			<div className={styles.textContainer}>
				<div className={styles.details}>
					<div className={styles.detailLines}>
						<div className={styles.type}>{animal.type}</div>
						<div className={styles.age}>{animal.age}</div>
						<div className={styles.gender}>{animal.gender}</div>
					</div>
					<div className={styles.detailLines}>
						<div className={styles.location}>{animal.city}</div>
					</div>
					<div className={styles.detailLines}>
						<div className={styles.specs}>Specs</div>
					</div>
					<div className={styles.createdOn}>
						{animal.createdAt.toString().slice(4, 16)}
					</div>
				</div>
				<Link href={`/user/${user._id}`}>
					<div className={styles.profileContainer}>
						<Image
							src={user.img}
							alt={`${user.username}'s profile`}
							className={styles.profileImage}
							width={60}
							height={60}
						/>
						{/* <p>{user.username}</p> */}
					</div>
				</Link>

				<div className={styles.description}>
					<div className={styles.desc}>Description</div>
					<p>{animal.description}</p>
				</div>
			</div>
		</div>
	);
};

export default SingleAnimal;
