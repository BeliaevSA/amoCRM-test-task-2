import { createContext } from "react";

interface IWindowContext {
  windowWidth: number;
}

export const WindowContext = createContext<IWindowContext | null>(
  null
);
