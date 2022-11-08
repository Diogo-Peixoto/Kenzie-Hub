import styled from "styled-components";

export const FormSearch = styled.div`
  height: 60px;
  width: 365px;

  background-color: white;

  border: 2px solid var(--grey-20);
  border-radius: 8px;
  padding: 0 10px 0 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    height: 84%;
  }

  input::placeholder {
    color: var(--grey-20);
  }

  transition: 0.5s;

  :hover {
    border: black 2px solid;
    input::placeholder {
      color: var(--grey-50);
    }
  }
`;
