import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { VscTasklist } from "react-icons/vsc";
import { MdDelete } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Button, Layout, Menu, theme } from "antd";
import { DashboardLayoutStyle } from "./DashboardLayoutStyle";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [userData, setUserData] = useState();
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const userId = JSON.parse(localStorage.getItem(import.meta.env.VITE_USERID));

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const nav = useNavigate();
  const getUserData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/user/one/${userId}`);
      setUserData(res?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <DashboardLayoutStyle>
      <Layout className="Layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <header>
            <h2>Eflex Todo</h2>
          </header>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            className="Menu"
            items={[
              {
                key: "1",
                icon: <VscTasklist />,
                label: "All Todo",
                onClick: () => nav(""),
              },
              {
                key: "2",
                icon: <MdDelete />,
                label: "Deleted Task",
                onClick: () => nav("deleted_todo"),
              },
              {
                key: "3",
                icon: <UserOutlined />,
                label: "Profile",
                onClick: () => nav("profile"),
              },
              {
                key: "4",
                icon: <IoMdLogOut className="IconLog" />,
                label: "Logout",
                className: "Logout",
                onClick: () => {
                  {
                    localStorage.removeItem(import.meta.env.VITE_USERTOKEN);
                    localStorage.removeItem(import.meta.env.VITE_USERID);
                    nav("/");
                  }
                },
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>

          {userData && !userData?.isVerified ? (
            <article className="Verify">
              Check your email to verify your account or <span>Verify now</span>
            </article>
          ) : null}

          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </DashboardLayoutStyle>
  );
};
export default DashboardLayout;
