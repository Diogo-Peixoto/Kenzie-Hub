import styled from "styled-components";

export const DivApp = styled.div`
  main {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  h1 {
    span {
      color: var(--grey-50);
    }
    animation: render 0.5s;
  }

  @media (max-width: 919px) {
    main {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
