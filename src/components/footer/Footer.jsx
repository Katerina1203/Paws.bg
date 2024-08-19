import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>Paws</div>
      <div className={styles.links}>
        <a href="/about" className={styles.link}>About</a>
        <a href="/services" className={styles.link}>Services</a>
        <a href="/contact" className={styles.link}>Contact</a>
      </div>
      <div className={styles.text}>
        Made with ♥ by Kate
      </div>
    </footer>
  );
};

export default Footer;
