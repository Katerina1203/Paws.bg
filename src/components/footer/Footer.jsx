import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Paws</div>
      <div className={styles.text}>
          made with ♥ by Kate
      </div>
    </div>
  );
};

export default Footer;