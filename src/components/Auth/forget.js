import { Spin, Form, Input, Button, Card, message } from "antd";
import { Link } from "react-router-dom";
import { auth } from "./fire";
import mail from "../../assets/LoginIcons/mail.svg";
import logo from "../../assets/LoginIcons/logo.svg";
import coverWoman from "../../assets/LoginIcons/coverWoman.svg";
import coverFlower from "../../assets/LoginIcons/coverFlower.svg";

const Forget = () => {
  const onFinish = async (values) => {
    auth
      .sendPasswordResetEmail(values.email)
      .then(() => {
        message.success(
          "Password recovery email sent, Please check your email address."
        );
      })
      .catch((error) => {
        message.warning(error.message);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  return (
    <div
      className="w-screen h-screen flex"
      style={{ backgroundColor: "rgb(144,84,231,0.1)" }}
    >
      <div className="w-1/2 flex justify-center items-center h-screen">
        <img
          className="absolute left-2 bottom-1"
          src={coverWoman}
          alt=""
          width="40%"
        />
      </div>
      <div className="w-1/2 flex justify-center pt-20 h-screen">
        <img
          className="absolute right-0 top-0"
          src={coverFlower}
          alt=""
          width="40%"
        />
        <Card className="absolute sm:w-80 xl:w-4/16 flex justify-center items-center rounded-3xl p-4">
          <Spin spinning={false}>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-center">
                  <img
                    className="transform hover:scale-105"
                    src={logo}
                    alt=""
                    width="75%"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "Wrong email address!",
                      },
                      {
                        required: true,
                        message: "Input your email address!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<img src={mail} alt="" />}
                      className="rounded-2xl border-primary w-60"
                      autoComplete="off"
                      placeholder={"Email address"}
                    />
                  </Form.Item>
                </div>
                <div className="flex items-center justify-center">
                  <Form.Item noStyle>
                    <Button
                      type="primary"
                      className="bg-primary rounded-xl text-white w-24"
                      htmlType="submit"
                    >
                      Send
                    </Button>
                  </Form.Item>
                </div>
                <Link
                  className="font-base text-base text-primary grid justify-center"
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
};
export default Forget;
