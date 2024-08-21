import AnimalCard from "@/components/animalCard/AnimalCard";
import styles from './animals.module.css'
import { getAnimals } from "@/lib/data"

const Animals = async () => {
  const animals = await getAnimals();
  console.log(animals)

  return (
    <div className={styles.postsGrid}>
      {animals.map((animal) => (
        <div className={styles.postCard} key={animal._id}> 
          <AnimalCard animal={animal} />
        </div>
      ))}
    </div>
  );
};

export default Animals;
