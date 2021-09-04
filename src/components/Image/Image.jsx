import classNames from "classnames";

import styles from "./image.module.css";

export const Image = ({ isGradient, src }) => {
  const componentClassName = classNames({
    [styles.gradient]: isGradient,
  });
  return (
    <div className={componentClassName}>
      <img src={src} />
    </div>
  );
};
