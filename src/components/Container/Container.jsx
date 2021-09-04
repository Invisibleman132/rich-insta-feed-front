import classNames from "classnames";
import styles from "./container.module.css";

export const Container = ({ children, isInner }) => {
  const componentClassName = classNames({
    [styles.containerInner]: isInner,
  });

  return <div className={componentClassName}>{children}</div>;
};
