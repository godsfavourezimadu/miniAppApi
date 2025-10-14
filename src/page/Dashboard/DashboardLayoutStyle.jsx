import styled from "styled-components";

export const DashboardLayoutStyle = styled.div`
width: 100%;
  height: 100vh;

  .Layout {
    height: 100%;

    header {
      width: 100%;
      height: 7%;
      display: flex;
      align-items: center;
      padding-left: 1rem;
      h2 {
        color: var(--main_white);
      }
    }

    .Menu {
      /* background: yellow; */
      height: 90%;
      display: flex;
      flex-direction: column;
      position: relative;

      .IconLog {
        color: var(--main_red);
        font-size: 1rem;
      }
      .Logout {
        color: var(--main_white);
        position: absolute;
        bottom: 0;
        font-size: 1rem;
      }
    }
  }

  .Verify {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    background-color: var(--primary_color_100);
    color: var(--main_white);
    justify-content: center;
    margin-top: 1rem;
    gap: 0.2rem;

    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
