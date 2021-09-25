import React, { useContext, useState } from "react";
import { LanguageContext } from "../../context";
import "moment/locale/mn";
import Dashboard from "./dashboard";
import Zones from "./zones";
import Channels from "./channels";
import MSL from "./msl";
import PricePoints from "./pricePoints";
import Salon from "./salon";

export default function Salons() {
  const { language } = useContext(LanguageContext);
  const [current, setCurrent] = useState(1);
  const Contents = [
    {
      key: 0,
      content: <Dashboard />,
    },
    {
      key: 1,
      content: <Zones />,
    },
    {
      key: 2,
      content: <Channels />,
    },
    {
      key: 3,
      content: <MSL />,
    },
    {
      key: 4,
      content: <PricePoints />,
    },
    {
      key: 5,
      content: <Salon />,
    },
  ];
  return (
    <div className="h-screen">
      <div className="text-lg font-bold w-36 flex items-start">
        {language === "eng" ? "Salons" : "Салон"}
      </div>
      <div className="mt-3 flex">
        <div className="space-y-6 text-xs text-secondary font-light">
          <div
            key={0}
            className={
              current === 0
                ? "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase text-primary font-semibold border-1 border-primary border-opacity-70"
                : "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase"
            }
            onClick={() => setCurrent(0)}
          >
            {language === "eng" ? "Dashboard" : "Дашбоард"}
          </div>
          <div
            key={1}
            className={
              current === 1
                ? "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase text-primary font-semibold border-1 border-primary border-opacity-70"
                : "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase"
            }
            onClick={() => setCurrent(1)}
          >
            {language === "eng" ? "Zones" : "Бүс"}
          </div>
          <div
            key={2}
            className={
              current === 2
                ? "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase text-primary font-semibold border-1 border-primary border-opacity-70"
                : "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase"
            }
            onClick={() => setCurrent(2)}
          >
            {language === "eng" ? "Channels" : "Суваг"}
          </div>
          <div
            key={3}
            className={
              current === 3
                ? "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md text-primary font-semibold border-1 border-primary border-opacity-70"
                : "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md"
            }
            onClick={() => setCurrent(3)}
          >
            {language === "eng" ? "MSL's" : "MSL's"}
          </div>
          <div
            key={4}
            className={
              current === 4
                ? "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase text-primary font-semibold border-1 border-primary border-opacity-70"
                : "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase"
            }
            onClick={() => setCurrent(4)}
          >
            {language === "eng" ? "Price points" : "Үнийн оноо"}
          </div>
          <div
            key={5}
            className={
              current === 5
                ? "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase text-primary font-semibold border-1 border-primary border-opacity-70"
                : "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase"
            }
            onClick={() => setCurrent(5)}
          >
            {language === "eng" ? "Salons" : "Салон"}
          </div>
        </div>
        <div className="ml-16 w-5/6 max-w-3xl">{Contents[current].content}</div>
      </div>
    </div>
  );
}
