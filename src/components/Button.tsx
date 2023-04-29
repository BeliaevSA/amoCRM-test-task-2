import { FC } from "react";
import styles from "../styles/Button.module.css";

interface IButtonProps {
  value: string;
  styleButton?: string;
  handleClick?: () => void;
}

export const Button: FC<IButtonProps> = ({
  value,
  styleButton,
  handleClick,
}) => {
  const styleBtn = styleButton ? styleButton : "";

  return (
    <button className={styles[styleBtn]} onClick={handleClick}>
      {value}
    </button>
  );
};
