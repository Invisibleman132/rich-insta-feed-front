import { Container } from "..";
import styles from "./navigation.module.css";
export const Navigation = () => {
  return (
    <ul className={styles.container}>
      <a className={styles.links}>
        <li>О сервисе</li>
      </a>
      <a className={styles.links}>
        <li>Сценарий</li>
      </a>
      <a className={styles.links}>
        <li>FAQ</li>
      </a>
    </ul>
  );
};
