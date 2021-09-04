import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Button } from "../Button";
import styles from "./header.module.css";
export const Header = () => {
  return (
    <header className={styles.container}>
      <Logo></Logo>
      <div className={styles.content}>
        <Navigation></Navigation>
        <Button color="purple">Регистрация</Button>
      </div>
    </header>
  );
};
