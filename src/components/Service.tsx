import { FC } from "react";
import styles from "../styles/Service.module.css";

interface ISwrviceProps {
  title: string;
  subtitle: string;
}

export const Service: FC<ISwrviceProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};
