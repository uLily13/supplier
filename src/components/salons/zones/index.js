import "moment/locale/mn";
import React, { useContext, useState } from "react";
import { LanguageContext } from "../../../context";
import { Button } from "antd";

import DataTable from "./dataTable";
import NewData from "./newData";

export default function Zones() {
  const { language } = useContext(LanguageContext);
  const [current, setCurrent] = useState(0);
  const Contents = [
    {
      key: 0,
      content: <DataTable />,
    },
    {
      key: 1,
      content: <NewData />,
    },
  ];
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <div className="text-lg font-bold w-36 flex items-center">
          {current === 0
            ? language === "eng"
              ? "Zones"
              : "Бүсүүд"
            : language === "eng"
            ? "Create zones"
            : "Бүс үүсгэх"}
        </div>
        {current === 0 && (
          <Button
            type="primary"
            className="w-36 flex items-center justify-center rounded-md h-7"
            onClick={() => setCurrent(1)}
          >
            {language === "eng" ? "Add New Zone" : "Бүс нэмэх"}
          </Button>
        )}
      </div>
      <div className="mt-3 font-light border-t-05 border-opacity-10">
        {Contents[current].content}
      </div>
    </div>
  );
}
