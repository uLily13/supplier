import Cookies from "js-cookie";
import axios from "axios";
import { auth } from "./fire";
import { message, notification } from "antd";

export const PasswordAuth = async (setLogin, values) => {
  const openNotification = (desc) => {
    notification.error({
      message: `${desc}`,
    });
  };
  var fireResponce = { success: false, data: [] };
  await auth
    .signInWithEmailAndPassword(values.email, values.password)
    .then((e) => {
      const user = e.user;
      fireResponce = {
        success: true,
        data: { email: user.email, uid: user.uid, phone: user.phoneNumber },
      };
      axios
        .post(`auth`, {
          uid: fireResponce.data.uid,
          phone: fireResponce.data.phone,
          email: fireResponce.data.email,
          role: "supplier",
        })
        .then((res) => {
          if (res.data.success === true) {
            Cookies.set(
              "cover",res.data["data"]["cover"]
            );
            Cookies.set(
              "logo",res.data["data"]["logo"]
            );
            Cookies.set("userId", res.data.data.userId);
            Cookies.set("userName", res.data.data.userName);
            Cookies.set("userPhone", res.data.data.userPhone);
            Cookies.set("userEmail", res.data.data.userEmail);
            Cookies.set("userRole", res.data.data.userRole);
            Cookies.set("userUid", res.data.data.userUid);
            Cookies.set("isActive", res.data.data.isActive);
            Cookies.set("fcmToken", res.data.data.fcmToken);
            Cookies.set("actionDate", res.data.data.actionDate);
            Cookies.set("key", res.data.data.key);
            Cookies.set("salonId", res.data.data.salonId);
            Cookies.set("name", res.data.data.name);
            Cookies.set("description", res.data.data.description);
            Cookies.set("district", res.data.data.district);
            Cookies.set("city", res.data.data.city);
            Cookies.set("khoroo", res.data.data.khoroo);
            Cookies.set("address", res.data.data.address);
            Cookies.set("phone", res.data.data.phone);
            Cookies.set("facebook", res.data.data.facebook);
            Cookies.set("instagram", res.data.data.instagram);
            Cookies.set("lat", res.data.data.lat);
            Cookies.set("lng", res.data.data.lng);
            Cookies.set("isActive", res.data.data.isActive);
            Cookies.set("isDone", res.data.data.isDone);
            Cookies.set("businessType", res.data.data.businessType);
            Cookies.set("isOfficialSalon", res.data.data.isOfficialSalon);
            Cookies.set("createdAT", res.data.data.createdAT);
            Cookies.set("monday", res.data.data.monday);
            Cookies.set("tuesday", res.data.data.tuesday);
            Cookies.set("wednesday", res.data.data.wednesday);
            Cookies.set("thursday", res.data.data.thursday);
            Cookies.set("friday", res.data.data.friday);
            Cookies.set("saturday", res.data.data.saturday);
            Cookies.set("sunday", res.data.data.sunday);
            Cookies.set("e", res.data.token);
            Cookies.set("oauth", true);
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${res.data.token}`;
            setLogin("true");
          } else {
            message.error(res.data.message);
          }
        })
        .catch((error) => {
          message.error(error.message);
        });
    })
    .catch((error) => {
      openNotification(error.message);
    });
  if (values.remember === true) {
    Cookies.set("rememberEmail", values.email);
  } else {
    localStorage.removeItem("rememberEmail");
  }
};
