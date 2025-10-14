import React, { useState } from "react";
import { SignUpStyle } from "./SignupStyle";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const SignUp = () => {
  const nav = useNavigate();
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const [loading, setLoadig] = useState(false);

  const onFinish = async (values) => {
    setLoadig(true);
    try {
      const res = await axios.post(`${BaseUrl}/user/sign-up`, values);
      toast.success(res?.data?.message);
      nav("/");
    } catch (err) {
      setLoadig(false);
      toast.error(err?.response?.data?.message);
    }
  };
  return (
    <SignUpStyle>
      <article className="Card_Body">
        <header>
          <h2>Create an account</h2>
        </header>

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
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
            <Button block type="primary" htmlType="submit">
              {loading ? <ClipLoader color="#ffffff" size={15} /> : "Sign Up"}
            </Button>
            or <NavLink to="/">Login now!</NavLink>
          </Form.Item>
        </Form>
      </article>
    </SignUpStyle>
  );
};

export default SignUp;
