import "../scroll.css";
import "moment/locale/mn";
import React, { useContext, useState } from "react";
import { Layout, Tooltip } from "antd";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { LanguageContext } from "../context";
// import axios from "axios";
// import Cookies from "js-cookie";
import NotFound from "../notFount";
import menuCollapsedIcon from "../assets/menuLogo/menuCollapsedIcon.svg";
import menuCollapseIcon from "../assets/menuLogo/menuCollapseIcon.svg";
import salonsIcon from "../assets/menuLogo/salonsIcon.svg";
import promotionsIcon from "../assets/menuLogo/promotionsIcon.svg";
import salesIcon from "../assets/menuLogo/salesIcon.svg";

import Salons from "./salons";
import Sales from "./sales";
import Promotions from "./promotions";

export default function Home() {
  // const { setLogin } = useContext(LoginContext);
  // const doLogout = () => {
  //   window.location.replace(language === "eng" ? "/en" : "/mn");
  //   Cookies.remove("userId");
  //   Cookies.remove("userName");
  //   Cookies.remove("userPhone");
  //   Cookies.remove("userEmail");
  //   Cookies.remove("userRole");
  //   Cookies.remove("userUid");
  //   Cookies.remove("isActive");
  //   Cookies.remove("fcmToken");
  //   Cookies.remove("actionDate");
  //   Cookies.remove("key");
  //   Cookies.remove("salonId");
  //   Cookies.remove("name");
  //   Cookies.remove("description");
  //   Cookies.remove("district");
  //   Cookies.remove("city");
  //   Cookies.remove("khoroo");
  //   Cookies.remove("address");
  //   Cookies.remove("phone");
  //   Cookies.remove("facebook");
  //   Cookies.remove("instagram");
  //   Cookies.remove("lat");
  //   Cookies.remove("lng");
  //   Cookies.remove("isActive");
  //   Cookies.remove("isDone");
  //   Cookies.remove("businessType");
  //   Cookies.remove("isOfficialSalon");
  //   Cookies.remove("createdAT");
  //   Cookies.remove("monday");
  //   Cookies.remove("tuesday");
  //   Cookies.remove("wednesday");
  //   Cookies.remove("thursday");
  //   Cookies.remove("friday");
  //   Cookies.remove("saturday");
  //   Cookies.remove("sunday");
  //   Cookies.remove("e");
  //   Cookies.remove("oauth");
  //   axios.defaults.headers.common["Authorization"] = ``;
  //   setLogin("false");
  // };
  const [currentMenu, setCurrentMenu] = useState(0);
  const [isCollapse, setIsCollapse] = useState(false);
  const { Content } = Layout;
  const { language } = useContext(LanguageContext);
  return (
    <div className="overflow-y-hidden h-screen w-screen">
      <Layout className="overflow-y-hidden h-screen w-screen bg-bgLightGrey">
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={isCollapse}
          collapsedWidth="187px"
          width="48px"
          className="bg-white p-0 "
        >
          <div className="h-full w-full">
            <div
              className={
                isCollapse === false
                  ? "p-2 pb-0 flex justify-center items-center"
                  : "p-2 pb-0 flex justify-end items-center"
              }
            >
              <div
                style={{
                  backgroundImage: `url(${
                    isCollapse === false ? menuCollapseIcon : menuCollapsedIcon
                  }`,
                }}
                className="w-6 h-6 bg-no-repeat bg-contain bg-center cursor-pointer transform hover:scale-105"
                onClick={() => setIsCollapse(!isCollapse)}
              />
            </div>
            <Tooltip
              placement="right"
              title={language === "eng" ? "Salons" : "Салон"}
            >
              <Link
                to="/salons"
                className={
                  currentMenu === 0
                    ? isCollapse === false
                      ? "bg-bgBlueSelect px-2 w-full h-12 flex justify-center items-center"
                      : "bg-bgBlueSelect px-2 w-full h-12 flex justify-start items-center space-x-4 pl-3"
                    : isCollapse === false
                    ? "px-2 w-full h-12 flex justify-center items-center"
                    : "px-2 w-full h-12 flex justify-start items-center space-x-4 pl-3"
                }
                onClick={() => setCurrentMenu(0)}
              >
                <div
                  style={{
                    backgroundImage: `url(${salonsIcon}`,
                  }}
                  className="w-6 h-6 bg-no-repeat bg-contain bg-center"
                />
                {isCollapse === true && (
                  <div className="w-32 h-12 flex items-center text-sm ">
                    {language === "eng" ? "Salons" : "Салон"}
                  </div>
                )}
              </Link>
            </Tooltip>
            <Tooltip
              placement="right"
              title={language === "eng" ? "Promotions" : "Идэвхижүүлэлт"}
            >
              <Link
                to="/promotions"
                className={
                  currentMenu === 1
                    ? isCollapse === false
                      ? "bg-bgBlueSelect px-2 w-full h-12 flex justify-center items-center"
                      : "bg-bgBlueSelect px-2 w-full h-12 flex justify-start items-center space-x-4 pl-3"
                    : isCollapse === false
                    ? "px-2 w-full h-12 flex justify-center items-center"
                    : "px-2 w-full h-12 flex justify-start items-center space-x-4 pl-3"
                }
                onClick={() => setCurrentMenu(1)}
              >
                <div
                  style={{
                    backgroundImage: `url(${promotionsIcon}`,
                  }}
                  className="w-6 h-6 bg-no-repeat bg-contain bg-center"
                />
                {isCollapse === true && (
                  <div className="w-32 h-12 flex items-center text-sm ">
                    {language === "eng" ? "Promotions" : "Идэвхижүүлэлт"}
                  </div>
                )}
              </Link>
            </Tooltip>
            <Tooltip
              placement="right"
              title={language === "eng" ? "Sales" : "Борлуулалт"}
            >
              <Link
                to="/sales"
                className={
                  currentMenu === 2
                    ? isCollapse === false
                      ? "bg-bgBlueSelect px-2 w-full h-12 flex justify-center items-center"
                      : "bg-bgBlueSelect px-2 w-full h-12 flex justify-start items-center space-x-4 pl-3"
                    : isCollapse === false
                    ? "px-2 w-full h-12 flex justify-center items-center"
                    : "px-2 w-full h-12 flex justify-start items-center space-x-4 pl-3"
                }
                onClick={() => setCurrentMenu(2)}
              >
                <div
                  style={{
                    backgroundImage: `url(${salesIcon}`,
                  }}
                  className="w-6 h-6 bg-no-repeat bg-contain bg-center"
                />
                {isCollapse === true && (
                  <div className="w-32 h-12 flex items-center text-sm ">
                    {language === "eng" ? "Sales" : "Борлуулалт"}
                  </div>
                )}
              </Link>
            </Tooltip>
          </div>
        </Layout.Sider>
        <Content className="site-layout-background h-screen">
          <div className="px-5 py-7 w-full h-full text-primary">
            <Switch>
              <Route path="/" exact render={() => <Redirect to="salons" />} />
              <Route exact path="/salons" component={Salons} />
              <Route exact path="/promotions" component={Promotions} />
              <Route exact path="/sales" component={Sales} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Content>
      </Layout>
    </div>
  );
}
