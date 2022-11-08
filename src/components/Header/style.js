import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  background-color: var(--grey-0);

  header {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 482px) {
    header {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
