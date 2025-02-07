import React, { createContext, useContext, useState, ReactNode } from "react";
interface PasswordContextType {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const PasswordContext = createContext<PasswordContextType | undefined>(
  undefined
);
export const usePasswordContext = () => {
  const context = useContext(PasswordContext);
  if (!context) {
    throw new Error(
      "usePasswordContext must be used within a PasswordProvider"
    );
  }
  return context;
};

export const PasswordProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <PasswordContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </PasswordContext.Provider>
  );
};
