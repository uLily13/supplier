import React, { useContext } from "react";
import { LanguageContext } from "../../../context";
import "moment/locale/mn";

export default function Salon() {
  const { language } = useContext(LanguageContext);
  // const [current, setCurrent] = useState(0);
  return (
    <div className="h-screen">
      <div className="text-lg font-bold w-36 flex items-center justify-between">
        <div>{language === "eng" ? "Zones" : "Бүсүүд"}</div>
        <div>{language === "eng" ? "Zones" : "Бүсүүд"}</div>
      </div>
      <div className="mt-3 flex font-light"></div>
    </div>
  );
}
