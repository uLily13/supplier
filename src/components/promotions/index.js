import React, { useContext, useState } from "react";
import { LanguageContext } from "../../context";
import "moment/locale/mn";

export default function Promotions() {
  const { language } = useContext(LanguageContext);
  const [current, setCurrent] = useState(0);
  return (
    <div className="h-screen">
      <div className="text-lg font-bold w-36 flex items-start">
        {language === "eng" ? "Promotions" : "Идэвхижүүлэлт"}
      </div>
      <div className="mt-3 flex">
        <div className="space-y-6 font-light text-xs">
          <div
            key={0}
            className={
              current === 0
                ? "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase font-semibold border-1 border-primary border-opacity-70"
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
                ? "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase font-semibold border-1 border-primary border-opacity-70"
                : "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase"
            }
            onClick={() => setCurrent(1)}
          >
            {language === "eng" ? "User Group" : "Хэрэглэгчийн бүлэг"}
          </div>
          <div
            key={2}
            className={
              current === 2
                ? "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase font-semibold border-1 border-primary border-opacity-70"
                : "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase"
            }
            onClick={() => setCurrent(2)}
          >
            {language === "eng" ? "Promotions" : "Идэвхижүүлэлт"}
          </div>
          <div
            key={3}
            className={
              current === 3
                ? "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase font-semibold border-1 border-primary border-opacity-70"
                : "w-36 h-10 cursor-pointer flex justify-center items-center bg-white rounded-md uppercase"
            }
            onClick={() => setCurrent(3)}
          >
            {language === "eng" ? "Announcement" : "Зарлал"}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
