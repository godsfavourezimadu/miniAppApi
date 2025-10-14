import styled from "styled-components";

export const AllTodoStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .allTodoSection {
    width: 90%;
    height: max-content;
    margin: 20px auto;
    padding: 20px;
    background: var(--main_white);

    h2 {
      text-align: center;
      margin-bottom: 20px;
      color: var(--primary_color_100);
    }

    .allTodos {
      display: flex;
      gap: 20px;

      .singleTodo {
        width: 30%;
        padding: 15px;
        border: 1px solid var(--main_gray);
        border-radius: 0.3rem;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 150px;

        h3 {
          color: var(--main_black);
          margin-bottom: 10px;
        }

        p {
          flex-grow: 1;
          color: var(--main_black);
          margin-bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* number of lines to show */
          -webkit-box-orient: vertical;
        }

        div {
          display: flex;
          justify-content: flex-end;
          gap: 10px;

          button {
            padding: 5px 10px;
            border: none;
            border-radius: 0.3rem;
            cursor: pointer;
            color: var(--main_white);
            background-color: var(--primary_color_100);
            transition: all 350ms ease-in-out;

            &:hover {
              background: var(--primary_color_200);
            }
          }
        }
      }
    }
  }

  .Addtask {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    cursor: pointer;
    color: var(--main_white);
    background-color: var(--primary_color_100);
    transition: all 350ms ease-in-out;
    bottom: 4%;
    right: 3%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    &:hover {
      background: var(--primary_color_200);
    }
  }
`;
export const PopBoxs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: max-content;

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid var(--main_gray);
    border-radius: 0.3rem;
    outline: none;
  }
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--main_gray);
    border-radius: 0.3rem;
    outline: none;
    resize: none;
    height: 100px;
  }
`;

export const LoadingBoxStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  background: #0604003d;
  z-index: 99999;
  position: absolute;
  backdrop-filter: blur(5px);
  color: var(--main_white);
`;
