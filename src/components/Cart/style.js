import styled from "styled-components";

export const CartStyle = styled.section`
  width: 365px;

  h3 {
    background-color: var(--color-primary);
    color: white;
    height: 65px;
    padding-left: 20px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    display: flex;
    align-items: center;
  }

  ul {
    width: 101.5%;
    min-height: 158px;
    max-height: 323px;
    padding: 20px 10px 20px 10px;
    background-color: var(--grey-0);

    display: flex;
    gap: 20px;
    flex-direction: column;

    overflow-y: scroll;

    .noneCartProducts {
      text-align: center;

      p {
        color: var(--grey-50);
      }
    }

    ::-webkit-scrollbar-track {
      background-color: white;
    }

    ::-webkit-scrollbar {
      background-color: white;
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--grey-20);
      border-radius: 8px;
    }
  }
`;

export const CartTotal = styled.div`
  height: 140px;
  border-top: 2px solid var(--grey-20);
  padding: 14px 10px 20px 10px;
  background-color: var(--grey-0);

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  span {
    color: var(--grey-50);
  }

  button {
    width: 100%;
    background-color: var(--grey-20);
    border-radius: 8px;

    color: var(--grey-50);
    font-weight: 600;
    line-height: 19.36px;
    font-size: 1rem;
  }
`;
