import React, { useEffect, useState } from "react";
import { AllTodoStyle, PopBoxs, LoadingBoxStyle } from "./AllTodoStyle";
import Modal from "antd/es/modal/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AllTodo = () => {
  const [showPop, setShowPop] = useState(false);
  const [userData, setUserData] = useState(null);
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const userId = JSON.parse(localStorage.getItem(import.meta.env.VITE_USERID));
  const token = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_USERTOKEN)
  );
  const [todoData, setTodoData] = useState({
    title: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const getUserData = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/user/one/${userId}`);
      setUserData(res?.data?.data);
    } catch (err) {

    }
  };

  const Logout = () => {
    localStorage.removeItem(import.meta.env.VITE_USERTOKEN);
    localStorage.removeItem(import.meta.env.VITE_USERID);
    nav("/");
    window.location.reload();
  };

  const CreateTodo = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${BaseUrl}/create-content`, todoData, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      console.log("res", res);
      toast.success(res?.data?.message);
      setLoading(false);
      setShowPop(false);
      setTodoData({ title: "", content: "" });
    } catch (err) {
      console.log("this is the error", err);
      setLoading(false);
      if (err?.response?.data?.message.includes("sign in")) {
        Logout();
      }
      toast.error("Some error occured");
    }
  };

  const DeleteTodo = async (todoId) => {
    try {
      const response = await axios.patch(
        `${BaseUrl}/trash-content/${todoId}`,
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data?.message);
      getUserData();

      console.log(response.data.message);
    } catch (error) {
      toast.error(error.data?.message);
      console.log(error?.data?.message);
      if (error?.response?.data?.message.includes("sign in")) {
        Logout();
      }
    }
  };
  console.log(userData);
  useEffect(() => {
    getUserData();
  }, []);

  const LoadingBox = () => {
    return <LoadingBoxStyle>Loading...</LoadingBoxStyle>;
  };

  const isVerified = () => {
    userData.isVerified
      ? setShowPop(true)
      : toast.error("please Verify your Email ");
  };

  return (
    <AllTodoStyle>
      <section className="allTodoSection">
        <h2>All Tasks</h2>
        <div className="allTodos">
          {userData?.todo
          ?.filter((item) => !item.isDeleted).map((item, index) => (
            <div className="singleTodo" key={index}>
              <h3>Title {item.title}</h3>
              <p>{item.content}</p>
              <div>
                <button>Edit</button>
                <button onClick={() => DeleteTodo(item._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <article className="Addtask" onClick={isVerified}>
        +
      </article>

      <Modal
        title="Add Task"
        centered
        open={showPop}
        onOk={CreateTodo}
        onCancel={() => setShowPop(false)}
      >
        <PopBoxs>
          <input
            type="text"
            placeholder="Enter Title"
            value={todoData.title}
            onChange={(e) =>
              setTodoData({ ...todoData, title: e.target.value })
            }
          />
          <textarea
            placeholder="Enter Todo"
            value={todoData.content}
            onChange={(e) =>
              setTodoData({ ...todoData, content: e.target.value })
            }
          />
        </PopBoxs>
      </Modal>

      {loading ? <LoadingBox /> : null}
    </AllTodoStyle>
  );
};

export default AllTodo;
