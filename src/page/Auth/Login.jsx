import React, { useState } from "react";
import { LoginStyle } from "./LoginStyle";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Login = () => {
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const [loading, setLoadig] = useState(false);
  const nav = useNavigate();

  const onFinish = async (values) => {
    setLoadig(true);
    try {
      const res = await axios.post(`${BaseUrl}/user/log-in`, values);
      localStorage.setItem(
        import.meta.env.VITE_USERTOKEN,
        JSON.stringify(res?.data?.token)
      );
      localStorage.setItem(
        import.meta.env.VITE_USERID,
        JSON.stringify(res?.data?.data?._id)
      );
      toast.success(res?.data?.message);
      console.log(res);
      nav("/dashboard");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message || err?.response?.data?.Failed);
      setLoadig(false);
    }
  };
  return (
    <LoginStyle>
      <article className="Card_Body">
        <header>
          <h2>Login</h2>
        </header>

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block disabled={loading} type="primary" htmlType="submit">
              {loading ? <ClipLoader color="#ffffff" size={15} /> : "Log in"}
            </Button>
            or <NavLink to="/sign_up">Register now!</NavLink>
          </Form.Item>
        </Form>
      </article>
    </LoginStyle>
  );
};

export default Login;
