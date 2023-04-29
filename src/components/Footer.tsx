import { FC } from "react";
import styles from "../styles/Footer.module.css";
import { SocialIcon } from "./SocialIcon";

const menuList = [
  "Расчёт стоимости",
  "Кейсы",
  "Услуги",
  "Благодарственные письма",
  "Виджеты",
  "Сертификаты",
  "Интеграции",
  "Блог на Youtube",
  "Наши клиенты",
  "Вопрос / Ответ",
];

export const Footer: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.company}>
            <h3 className={styles.title}>О компании</h3>
            <ul>
              <li className={styles["nav-link"]}>
                <a href="##">Партнёрская программа</a>
              </li>
              <li className={styles["nav-link"]}>
                <a href="##">Вакансии</a>
              </li>
            </ul>
          </div>
          <div className={styles.menu}>
            <h3 className={styles.title}>Меню</h3>
            <ul className={styles["menu-list"]}>
              {menuList.map((value, index) => (
                <li key={index} className={styles["nav-link"]}>
                  <a href="##">{value}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.contacts}>
          <h3 className={styles.title}>Контакты</h3>
          <div className={styles["contacts-items"]}>
            <a href="tel:+75555555555" className={styles.tel}>
              +7 555 555-55-55
            </a>
            <div className={styles.social}>
              <SocialIcon href="#telegram" value="telegram" />
              <SocialIcon href="#viber" value="viber" />
              <SocialIcon href="#whatsapp" value="whatsapp" />
            </div>
            <p>Москва, Путевой проезд 3с1, к 902</p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>©WELBEX 2022. Все права защищены.</p>
        <a href="##">Политика конфиденциальности</a>
      </div>
    </>
  );
};
