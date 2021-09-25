import React, { useContext } from "react"; // useContext
import { LanguageContext } from "./context";
import mn from "./assets/image/mn.svg";
import eng from "./assets/image/eng.svg";
import { useLocation } from "react-router-dom";
export default function ChangeLanguage() {
  const location = useLocation();
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <span
      onClick={() => {
        setLanguage(language === "eng" ? "mn" : "eng");
        const path = location.pathname.substring(3, location.pathname.length);
        window.location.replace(
          language === "eng" ? "/mn" + path : "/en" + path
        );
      }}
      className="cursor-pointer text-right static"
    >
      {language === "eng" ? (
        <img
          src={mn}
          alt="mn"
          width="25px"
          className="transform  hover:scale-110"
        />
      ) : (
        <img
          src={eng}
          alt="eng"
          width="25px"
          className="transform  hover:scale-110"
        />
      )}
    </span>
  );
}
