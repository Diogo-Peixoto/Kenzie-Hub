import styled from "styled-components";

export const BoxList = styled.ul`
  width: 940px;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  animation: render 0.5s;

  @media (max-width: 651px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
    margin-right: -1rem;
  }
`;
