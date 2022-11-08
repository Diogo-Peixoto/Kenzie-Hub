import styled from "styled-components";

const ButtonStyle = styled.button`
  height: 2.375rem;
  font-weight: 500;
  font-size: 0.799rem;
  line-height: 1.319rem;
  color: var(--grey-0);
  background-color: var(${({color}) => `${color}`});
  border-radius: 0.2rem;
`;

export default ButtonStyle;
