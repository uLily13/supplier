import React from "react";
function Tab({ title, setWidget, selected, direction }) {
  return (
    <div className="cursor-pointer" onClick={setWidget}>
      <div
        className={
          direction === "horizontal" ?
            selected ?
              "font-medium text-primary rounded-t-lg border-b border-primary border-opacity-30 bg-primary bg-opacity-5"
              :
              "hover:border-b hover:border-primary hover:border-opacity-20"
            : selected ? "font-normal rounded-l-xl bg-primary bg-opacity-5 text-primary"
              : "rounded-l-xl hover:bg-primary hover:bg-opacity-5"
        }
      >
        <div className="text-sm py-2 px-6">{title}</div>
      </div>
    </div >
  );
}
export default Tab;
