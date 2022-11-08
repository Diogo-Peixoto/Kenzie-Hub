import styled from "styled-components";


export const FormAllPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 1rem;

  main {
    background-color: var(--grey-3);
    padding-top: 2.099rem;
    border-radius: 0.2rem;
    width: 100%;

    

    a{
      height: 2.375rem;
      font-weight: 500;
      font-size: 0.799rem;
      line-height: 1.319rem;
      color: var(--grey-0);
      background-color: var(--grey-1);
      border-radius: 0.2rem;
      text-decoration: none;
      width: 90%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    & > div {
      color: var(--grey-0);
      display: flex;
      flex-direction: column;

      display: flex;
      align-items: center;
      gap: 1.099rem;

      h2 {
        font-weight: 700;
        font-size: 0.899rem;
        line-height: 1.399rem;
      }
      p {
        color: var(--grey-1);
        font-size: 0.599rem;
        font-weight: 400;
        line-height: 1.099rem;
      }
    }
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.313rem;

  width: 100%;

  padding-inline: 1.124rem 0.875rem;
  padding-top: 1.438rem;
  padding-bottom: 1.249rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.125rem;

    label {
      color: var(--grey-0);
      font-weight: 400;
      font-size: 0.609rem;
    }

    input,
    select {
      height: 2.375rem;
      padding-inline-start: 0.813rem;
      background-color: var(--grey-2);
      border-radius: 0.2rem;
      color: var(--grey-0);

      ::placeholder {
        color: var(--grey-1);
        font-weight: 400;
        font-size: 0.812rem;
        line-height: 1.319rem;
      }
    }

    span {
      font-size: 0.5rem;
      color: var(--color-error);
      display: flex;
      align-items: center;
      justify-items: center;
      gap: 5px;
    }
  }
`;
