import styled from "styled-components";

export const Product = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  figure {
    height: 80px;
    width: 80px;
    background-color: var(--grey-20);
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 70px;
      height: 70px;
      object-fit: cover;
    }
  }

  .boxInformations {
    display: flex;
    justify-content: space-between;
    width: 70%;

    p {
      color: var(--grey-50);
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    span {
      font-weight: 500;
      font-size: 12px;
      line-height: 14.53px;
      color: #bdbdbd;

      cursor: pointer;
    }
  }

  :hover {
    .boxInformations {
      span {
        color: black;
        text-decoration: underline;
      }
    }
  }

  animation: render 0.5s;
`;
