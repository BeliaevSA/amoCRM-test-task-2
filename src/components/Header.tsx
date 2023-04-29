import { FC } from "react";
import styles from "../styles/Header.module.css";
import { SocialIcon } from "./SocialIcon";

const navData = [
  "Услуги",
  "Виджеты",
  "Интеграции",
  "Кейсы",
  "Сертификаты",
];

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <div className={styles.logo}>
            <img
              alt=""
              src={require("../assets/images/logo_welbex.png")}
            />
          </div>
          <nav className={styles.nav}>
            <ul className={styles["nav-list"]}>
              {navData.map(item => (
                <li key={item}>
                  <a className={styles["nav-item"]} href="#nav">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.contacts}>
          <a className={styles.tel} href="tel:+75555555555">
            +7 555 555-55-55
          </a>
          <div className={styles.social}>
            <SocialIcon href="#telegram" value="telegram" />
            <SocialIcon href="#viber" value="viber" />
            <SocialIcon href="#whatsapp" value="whatsapp" />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.description}>
          крупный интегратор CRM в России и ещё 8 странах
        </div>
      </div>
    </header>
  );
};
