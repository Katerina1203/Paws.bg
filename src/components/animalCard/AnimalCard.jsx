import styles from './animalCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
const AnimalCard = ({animal}) => {
    console.log(animal);
    return (
        <div className={styles.container}>
            <div className={styles.rightSide}>
                <div className={styles.imgContainer}>
             
                    <Link className={styles.link} href={`/animals/${animal.id}`}>   
                     <Image src={animal.img} className={styles.img} alt="" fill />
                 </Link>
                 
                </div>
            </div>
            <div className={styles.bottomSide}>
                <p className={styles.type}> {animal.type}</p>
                <p className={styles.age}>{animal.age}</p>
                <div className={styles.charBox}>
                    <p className={styles.char}>{animal.city}</p>
                    <p className={styles.char}>{animal.gender}</p>
                </div>
            </div>
        </div>
    )
}
export default AnimalCard