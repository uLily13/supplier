import React from "react";
import { NavLink } from "react-router-dom";
function LocalMenu({ icon, title, to }) {
  return (
    <NavLink
      activeClassName="border-b-2 font-bold text-xs text-primary border-primary"
      to={{ pathname: to }}
      className="w-full flex justify-center text-xs pt-1 text-menuTextColor"
    >
      <div className="w-20 h-14 grid justify-center items-end text-center pb-1 mx-2 text-xxs">
        <div className="flex justify-center transform hover:scale-110 w-20">
          <img src={icon} alt="link" width="27px" />
        </div>
        {title}
      </div>
    </NavLink>
  );
}
export default LocalMenu;
