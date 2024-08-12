import AnimalCard from "@/components/animalCard/AnimalCard"
import styles from './animals.module.css'
import { getAnimals } from "@/lib/data";
const Animals = async () => {
  const animals=await getAnimals() 
    return <div className={styles.container}>
    {animals.map((animal)=>
    <div className={styles.animal} key={animal.id}> 
      <AnimalCard animal={animal}/>
    </div>
    )}
    </div>;
  };
  
  export default Animals;