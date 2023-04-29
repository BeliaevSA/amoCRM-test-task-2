import { FC } from "react";
import styles from "../styles/Main.module.css";
import { Service } from "./Service";
import { Button } from "./Button";
import { ServiceMobile } from "./ServiceMobile";

interface IMainProps {
  windowWidth: number;
}

export const Main: FC<IMainProps> = ({ windowWidth }) => {
  const services =
    windowWidth > 480 ? (
      <div className={styles["services-items"]}>
        <Service title="Виджеты" subtitle="30 готовых решений" />
        <Service
          title="Dashboard"
          subtitle="с показателями вашего бизнеса"
        />
        <Service
          title="Skype Аудит"
          subtitle="отдела продаж и CRM системы"
        />
        <Service title="35 дней" subtitle="использования CRM" />
      </div>
    ) : (
      <div className={styles["services-items"]}>
        <ServiceMobile title="Skype аудит" />
        <ServiceMobile title="30 виджетов" />
        <ServiceMobile title="Dashboard" />
        <ServiceMobile title="Месяц аmoCRM" />
      </div>
    );

  return (
    <main className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles["info-title"]}>
          Зарабатывайте больше{" "}
          <span className={styles.logo}>с WELBEX</span>
        </h1>
        <p className={styles.description}>
          Развиваем и контролируем продажи за вас
        </p>
      </div>
      <div className={styles.services}>
        <h2 className={styles["services-header"]}>
          Вместе с <span>бесплатной консультацией</span> мы дарим:
        </h2>
        {services}
        {windowWidth > 480 && (
          <Button
            value="Получить консультацию"
            styleButton="button"
          />
        )}
      </div>
    </main>
  );
};
