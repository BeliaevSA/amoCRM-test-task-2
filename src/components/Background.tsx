import { FC } from "react";
import styles from "../styles/Background.module.css";

export const Background: FC = () => {
  return (
    <>
      <div className={styles["purple-light"]}></div>
      <div className={styles["red-light"]}></div>
      <img
        className={styles["purple-ball"]}
        alt=""
        src={require("../assets/images/purple-ball.png")}
      />
      <img
        className={styles["red-ball-big"]}
        alt=""
        src={require("../assets/images/red-ball-big.png")}
      />
      <img
        className={styles["red-ball-small"]}
        alt=""
        src={require("../assets/images/red-ball-small.png")}
      />
    </>
  );
};
