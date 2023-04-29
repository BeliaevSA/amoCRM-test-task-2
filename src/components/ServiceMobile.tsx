import { FC } from "react";
import styles from "../styles/ServiceMobile.module.css";

interface IServiceMobileProps {
  title: string;
}

export const ServiceMobile: FC<IServiceMobileProps> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dash}></div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};
