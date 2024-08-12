
import styles from './singleAnimal.module.css'
import Image from 'next/image'
import { getAnimalAd } from "@/lib/data";
import { Suspense } from "react";
import UserCard from  "@/components/userCard/UserCard"
const SingleAnimal = async ({params}) => {
  const { id } = params;
  const animal = await getAnimalAd(id)

  return (
  <div className={styles.container}>
   { animal.img&&<div className={styles.imgContainer}>
    <Image src={animal.img} alt="animal" fill />
    
      </div>}
        <div className={styles.textContainer}>
          <div className={styles.details}>
            <div className={styles.firstLine}>
            <div className={styles.age}>{animal.type}</div>
              <div className={styles.age}>{animal.age}</div>
              <div className={styles.gender}>{animal.gender}</div>
            </div>
            <div className={styles.secondLine}>
              <div className={styles.location}>{animal.city}</div>
            </div>
            <div className={styles.thirdLine}>
              <div className={styles.specs}>Specs</div>
            </div>
            <div>
            <div className={styles.createdOn}>{animal.createdAt.toString().slice(4,16)}</div>
            </div>
          </div>
      
          {animal && (
            <Suspense fallback={<div>Loading...</div>}>
              <UserCard Id={animal.userID} />
            </Suspense>
          )}
          <div className={styles.description}>
            <div className={styles.desc}>Description</div>
          </div>

        </div>
      </div>
  )
};

export default SingleAnimal;