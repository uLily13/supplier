import axios from "axios";
import { auth } from "./fire";
import { message, notification } from "antd";

export const PasswordAuth = async (values) => {
  const openNotification = (desc) => {
    notification.error({
      message: `${desc}`,
    });
  };
  var fireResponce = { success: false, data: [] };
  await auth
    .createUserWithEmailAndPassword(values.email, values.password)
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
            message.success(res.data.message);
          } else {
            message.warning(res.data.message);
          }
        })
        .catch((error) => {
          message.error(error.message);
        });
    })
    .catch((error) => {
      openNotification(error.message);
    });
};
