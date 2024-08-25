import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "@/components/carousel/Carousel";

export const metadata = {
  title: "Our Services",
  description: "Discover the services we offer",
};

const ServicesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
        Осинови, не купувай.
        </h1>
        <p className={styles.information}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam
        </p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h2 className={styles.boxTitle}>Lorem</h2>
            <p className={styles.boxText}>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className={styles.box}>
            <h2 className={styles.boxTitle}>Lorem</h2>
            <p className={styles.boxText}>Lorem ipsum dolor sit amet, consectetur consecteturconsectetur</p>
          </div>
          <div className={styles.box}>
            <h2 className={styles.boxTitle}>Lorem</h2>
            <p className={styles.boxText}>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Carousel className={styles.carousel} />
      </div>
    </div>
  );
};

export default ServicesPage;
