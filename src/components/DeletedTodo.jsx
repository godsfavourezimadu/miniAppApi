import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DeleteTodoStyle } from "./DeleteTodoStyle";
const DeletedTodo = () => {
  const [Trash, setTrash] = useState([]);
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const token = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_USERTOKEN)
  );
  const Logout = () => {
    localStorage.removeItem(import.meta.env.VITE_USERTOKEN);
    localStorage.removeItem(import.meta.env.VITE_USERID);
    nav("/");
    window.location.reload();
  };
  const allTrash = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/all-trash-content`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(response?.data?.message);
      setTrash(response?.data?.data);
    } catch (error) {
      toast.error(error?.data?.message);

      if (error?.response?.data?.message.includes("sign in")) {
        Logout();
      }
    }
  };
  useEffect(() => {
    allTrash();
  }, []);
  const DeleteForever = async (todoId) => {
    try {
      const response = await axios.delete(
        `${BaseUrl}/delete-content/${todoId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success(response.data.message);
      allTrash(response?.data?.data);
    } catch (error) {
      if (error?.response?.data?.message.includes("sign in")) {
        Logout();
      }
      toast.error(error?.data?.message);
    }
  };
  const restoreTrash = async (todoId) => {
    try {
      const response = await axios.patch(
        `${BaseUrl}/update-content/${todoId}`,
        { isDeleted: false },

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response?.data?.message);
      allTrash();
      console.log(response);
    } catch (error) {
      if (error?.response?.data?.message.includes("sign in")) {
        Logout();
      }
      toast.error(error?.data?.message);
    }
  };
  return (
    <DeleteTodoStyle>
      <h2>Deleted Todos</h2>
      <div className="allTodoSection">
        {Trash.length === 0 ? (
          <p>No deleted todos</p>
        ) : (
          Trash.map((todo) => (
            <div key={todo._id} className="singleTodo">
              <h3>{todo.title}</h3>
              <p>{todo.content}</p>
              <div>
                <button onClick={() => restoreTrash(todo._id)}>Restore</button>
                <button onClick={() => DeleteForever(todo._id)}>
                  Delete Forever
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </DeleteTodoStyle>
  );
};

export default DeletedTodo;
