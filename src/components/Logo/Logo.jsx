import styles from "./logo.module.css";
export const Logo = () => {
  return (
    <span className={styles.container}>
      RICH
      <span className={styles.bigText}>INSTA</span>
      FEED
    </span>
  );
};
