import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.25rem;

  width: 100%;
  height: 7.064rem;

  a {
    height: 1.997rem;
    width: 4.971rem;
    background-color: var(--grey-3);

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--grey-0);
    text-decoration: none;
    font-size: 0.599rem;
    font-weight: 600;
    line-height: 1.421rem;
  }
`;

export default HeaderStyle;
