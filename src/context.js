import React from "react";
import Cookies from "js-cookie";
const getInitialLogin = (_) => {
  if (typeof window !== "undefined") {
    const storedPrefs = Cookies.get("tcNl4vWD_MvpRmKMtWRGvO6UmnQ5gg9s");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: false)");
    if (userMedia.matches) {
      return "false";
    }
  }
  return "false";
};
const getInitialLanguage = (_) => {
  if (typeof window !== "undefined") {
    const storedPrefs = Cookies.get("language");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: eng)");
    if (userMedia.matches) {
      return "eng";
    }
  }
  return "eng";
};
export const LoginContext = React.createContext();
export const LanguageContext = React.createContext();
export const LanguageProvider = ({ initialLanguage, children }) => {
  const [language, setLanguage] = React.useState(getInitialLanguage);

  const rawSetLanguage = (lng) => {
    const root = window.document.documentElement;
    const isEnglish = lng === "eng";

    root.classList.remove(isEnglish ? "eng" : "mn");
    root.classList.add(lng);

    Cookies.set("language", lng);
  };
  if (initialLanguage) {
    rawSetLanguage(initialLanguage);
  }
  React.useEffect(
    (_) => {
      rawSetLanguage(language);
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
export const LoginProvider = ({ initialLogin, children }) => {
  const [login, setLogin] = React.useState(getInitialLogin);
  const rawSetLogin = (lgn) => {
    const root = window.document.documentElement;
    const isLogin = lgn === "true";
    root.classList.remove(isLogin ? "false" : "true");
    root.classList.add(lgn);
    Cookies.set("tcNl4vWD_MvpRmKMtWRGvO6UmnQ5gg9s", lgn);
  };

  if (initialLogin) {
    rawSetLogin(initialLogin);
  }

  React.useEffect(
    (_) => {
      rawSetLogin(login);
    },
    [login]
  );

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
