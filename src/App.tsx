import styles from "./styles/TaskTwoPage.module.css";
import { Background } from "./components/Background";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { FC, useEffect, useState } from "react";

export const App: FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      {windowWidth > 700 && <Background />}
      <div className={styles.app}>
        <Header />
        <Main windowWidth={windowWidth} />
        <Footer />
      </div>
    </>
  );
};
