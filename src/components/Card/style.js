import styled from "styled-components";

export const CardStyle = styled.li`
  min-width: 300px;
  height: 346px;
  border: 2px solid var(--grey-20);
  border-radius: 5px;

  div {
    width: 100%;
    height: 150px;
    background-color: var(--grey-0);

    display: flex;
    align-items: center;
    justify-content: center;

    figure {
      height: 100%;
      width: 160px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 14px;

    padding-left: 21px;
    margin-top: 26.67px;

    p {
      color: var(--grey-50);
    }

    span {
      color: var(--color-primary);
    }
  }
  transition: 0.7s;
  animation: render 0.5s;

  :hover {
    transform: scale(1.015);
  }
`;
