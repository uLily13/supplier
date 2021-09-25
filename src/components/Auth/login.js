import React, { useState, useContext } from "react";
import { LoginContext, LanguageContext } from "../../context";
import { Form, Input, Button, Card, Spin, message } from "antd";
import { Link } from "react-router-dom";
import { PasswordAuth } from "./passwordAuthLogin";
import coverWoman from "../../assets/LoginIcons/coverWoman.svg";
import coverFlower from "../../assets/LoginIcons/coverFlower.svg";

export default function Login() {
  const { setLogin } = useContext(LoginContext);
  const [form] = Form.useForm();
  const { language } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-screen h-screen flex bg-bgLightGrey space-x-24">
      <div className="w-1/2 flex justify-center items-center h-screen">
        <div
          className="w-full h-screen bg-no-repeat bg-right-bottom bg-cover"
          style={{ backgroundImage: `url(${coverWoman})` }}
        />
      </div>
      <div
        className="w-1/2 flex justify-center pt-20 h-screen bg-no-repeat bg-right-top bg-contain"
        style={{ backgroundImage: `url(${coverFlower})` }}
      >
        <Card className="absolute sm:w-72 xl:w-4/16 flex justify-center items-center rounded-3xl shadow-md">
          <Spin spinning={loading}>
            <Form
              name="basic"
              form={form}
              onFinish={() => {
                PasswordAuth(setLogin, {
                  email: form.getFieldsValue().email,
                  password: form.getFieldsValue().password,
                }).then(() => setLoading(false));
              }}
              onFinishFailed={() =>
                message.warning("Input your email or password!")
              }
            >
              <div className="space-y-5">
                <div className="space-y-4">
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message:
                          language === "eng"
                            ? "Wrong email address!"
                            : "Цахим хаяг буруу байна!",
                      },
                      {
                        required: true,
                        message:
                          language === "eng"
                            ? "Input your email address."
                            : "Цахим хаягаа оруулна уу.",
                      },
                    ]}
                    className="m-0"
                  >
                    <Input
                      className="rounded-lg border-opacity-20 border-primary w-52"
                      autoComplete="off"
                      placeholder={
                        language === "eng"
                          ? "Email address."
                          : "Таны цахим хаяг."
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message:
                          language === "eng"
                            ? "Input your password."
                            : "Нууц үгээ оруулна уу.",
                      },
                    ]}
                  >
                    <Input
                      type="password"
                      autoComplete="off"
                      className="rounded-lg border-opacity-20 border-primary text-primary m-0"
                      placeholder={
                        language === "eng" ? "Password." : "Таны нууц үг."
                      }
                    />
                  </Form.Item>
                </div>
                <Form.Item className="m-0 p-0">
                  <Button
                    htmlType="submit"
                    type="primary"
                    block
                    className="rounded-2xl text-base flex items-center justify-center h-7"
                    onClick={() => {
                      setLoading(
                        form.getFieldsValue("password") === undefined
                          ? false
                          : form.getFieldsValue("email") === undefined
                          ? false
                          : true
                      );
                    }}
                  >
                    {language === "eng" ? "login" : "Нэвтрэх"}
                  </Button>
                </Form.Item>
                <div className="w-full flex items-center justify-between">
                  <Link
                    to="signup"
                    className="flex items-center  text-xs text-right text-primary"
                  >
                    {language === "eng" ? "SignUp" : "Бүртгүүлэх"}
                  </Link>
                  <Link
                    to="forget"
                    className="flex items-center text-xs text-primary"
                  >
                    {language === "eng"
                      ? "Forgot password?"
                      : "Нууц үг мартсан?"}
                  </Link>
                </div>
              </div>
            </Form>
          </Spin>
        </Card>
      </div>
    </div>
  );
}
