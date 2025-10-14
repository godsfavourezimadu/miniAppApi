import styled from "styled-components";

export const LoginStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary_color_200);

  .Card_Body {
    width: 30%;
    height: max-content;
    padding: 2rem;
    background-color: var(--main_white);
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      width: 100%;
      height: 5rem;

      h2 {
        font-size: 2.5rem;
        color: var(--primary_color_200);
      }
    }

    Form {
      width: 100%;
    }
  }
`;
