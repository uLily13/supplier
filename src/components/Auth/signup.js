import React, { useState, useContext } from "react";
import { LanguageContext } from "../../context";
import { Form, Input, Button, Card, Spin, message } from "antd";
import { Link } from "react-router-dom";
import { PasswordAuth } from "./passwordAuthSignUp";
import coverWoman from "../../assets/LoginIcons/coverWoman.svg";
import coverFlower from "../../assets/LoginIcons/coverFlower.svg";

export default function Signup() {
  const { language } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
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
                PasswordAuth({
                  email: form.getFieldsValue().email,
                  password: form.getFieldsValue().password,
                  name: form.getFieldsValue().name,
                  registerId: form.getFieldsValue().registerId,
                }).then(() => {
                  window.location.replace(language === "eng" ? "/en" : "/mn");
                  setLoading(false);
                });
              }}
              onFinishFailed={() =>
                message.warning("Input your all informations!")
              }
            >
              <div className="space-y-5">
                <div className="space-y-4">
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "*",
                      },
                    ]}
                    className="m-0"
                  >
                    <Input
                      className="rounded-lg border-opacity-20 border-primary w-52"
                      autoComplete="off"
                      placeholder={
                        language === "eng" ? "Company name" : "Байгууллагын нэр"
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name="registerId"
                    rules={[
                      {
                        required: true,
                        message: "*",
                      },
                    ]}
                    className="m-0"
                  >
                    <Input
                      type="number"
                      className="rounded-lg border-opacity-20 border-primary w-52"
                      autoComplete="off"
                      placeholder={
                        language === "eng"
                          ? "Company register"
                          : "Байгууллагын дугаар"
                      }
                    />
                  </Form.Item>
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
                        message: "*",
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
                        message: "*",
                      },
                    ]}
                    className="m-0"
                  >
                    <Input
                      type="password"
                      autoComplete="off"
                      className="rounded-lg border-primary border-opacity-20 w-52"
                      placeholder={
                        language === "eng" ? "Password." : "Таны нууц үг."
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name="confirmPassword"
                    dependencies={["password"]}
                    rules={[
                      {
                        required: true,
                        message:
                          language === "eng"
                            ? "Input your password."
                            : "Нууц үгээ оруулна уу.",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            language === "eng"
                              ? "Passwords do not match!"
                              : "Нууц үг таарахгүй байна!"
                          );
                        },
                      }),
                    ]}
                    className="m-0"
                  >
                    <Input
                      type="password"
                      autoComplete="off"
                      className="rounded-lg border-primary border-opacity-20 w-52"
                      placeholder={
                        language === "eng"
                          ? "Confirm Password"
                          : "Нууц үг давтах"
                      }
                    />
                  </Form.Item>
                </div>
                <Form.Item>
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
                          ? true
                          : form.getFieldsValue("name") === undefined
                          ? true
                          : form.getFieldsValue("confirmPassword") === undefined
                          ? true
                          : form.getFieldsValue("registerId") === undefined
                          ? true
                          : false
                      );
                    }}
                  >
                    {language === "eng" ? "Signup" : "Бүртгүүлэх"}
                  </Button>
                </Form.Item>
                <Link
                  className="font-base text-xs grid justify-center"
                  to="/"
                >
                  Back to login
                </Link>
              </div>
            </Form>
          </Spin>
        </Card>
      </div>
    </div>
  );
}
