import styled from "styled-components";
export const DeleteTodoStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .allTodoSection {
    width: 90%;
    height: max-content;
    margin: 20px auto;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    background: var(--main_white);
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
        justify-content: end;
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
`;
