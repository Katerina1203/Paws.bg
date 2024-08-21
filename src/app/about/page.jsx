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
          Discover Our Exceptional Services
        </h1>
        <p className={styles.information}>
          We provide a range of high-quality services tailored to meet your needs. From personalized consultations to comprehensive solutions, our team is dedicated to delivering excellence. Explore what we offer and find out how we can assist you in achieving your goals.
        </p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h2 className={styles.boxTitle}>Consulting</h2>
            <p className={styles.boxText}>Expert advice tailored to your business needs.</p>
          </div>
          <div className={styles.box}>
            <h2 className={styles.boxTitle}>Development</h2>
            <p className={styles.boxText}>Custom solutions designed and built for you.</p>
          </div>
          <div className={styles.box}>
            <h2 className={styles.boxTitle}>Support</h2>
            <p className={styles.boxText}>Ongoing support to ensure your success.</p>
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
