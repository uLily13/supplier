import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Cookies from "js-cookie";
import axios from "axios";
import { LoginProvider, LanguageProvider } from "./context";
import { notification } from "antd";

// axios.defaults.baseURL = "https://esalon.mn/api/supplier/";
axios.defaults.baseURL = "http://localhost:3000/api/supplier/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get("e")}`;
notification.config({
  placement: "topRight",
  duration: 2,
  rtl: true,
});

axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
