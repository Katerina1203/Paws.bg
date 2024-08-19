import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "@/components/carousel/Carousel";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet. Et dolore esse At
        </h1>
        <p className={styles.information}>
          Lorem ipsum dolor sit amet. Et dolore esse At explicabo dolore in
          magnam voluptatum qui suscipit iusto hic cumque quia aut laboriosam
          excepturi? Et eius omnis rem quos quia aut culpa fuga et adipisci
          molestias id eaque cumque aut fuga eius qui iusto quasi? Et rerum
          maxime in dolorum aliquid et saepe voluptates eum vitae tempore qui
          minima eaque ut deserunt quas est ipsa nihil.
        </p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h2 className={styles.boxTitle}>Lorem ipsum</h2>
            <p className={styles.boxText}>omnis rem quos</p>
          </div>
          <div className={styles.box}>
            <h2 className={styles.boxTitle}>Lorem ipsum+</h2>
            <p className={styles.boxText}>esse At explicabo</p>
          </div>
          <div className={styles.box}>
            <h2 className={styles.boxTitle}>Lorem ipsum</h2>
            <p className={styles.boxText}>esse At explicabo</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Carousel />
      </div>
    </div>
  );
};

export default AboutPage;
