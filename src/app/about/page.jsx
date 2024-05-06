import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
  return <div className={styles.imgContainer}>
     <Image
          src="/catanddog.png"
          alt="About Image"
          fill
    
        />
       
       </div>;
};

export default Home;