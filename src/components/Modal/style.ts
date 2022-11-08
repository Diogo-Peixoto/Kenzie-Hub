import styled from "styled-components";

const ModalStyle = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(18, 18, 20, 0.5);

  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    cursor: pointer;
  }

  form{
    width: 369px;
    background-color: var(--grey-3);
    padding-bottom: 32px;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    .header-form{
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 50px;
      padding-inline: 20px 12px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;

      color: white;
      font-size: 14px;
      font-weight: 700;
      background-color: var(--grey-2);

      svg{
        color: var(--grey-1);
      }
    }

    div{
      display: flex;
      flex-direction: column;
      gap: 22px;

      padding-inline: 20px 12px;

      label{
        font-size: 12px;
        font-weight: 400;
        color: white;
      }

      input,select{
        height: 48px;
        padding-inline-start: 16px;
        border: white 1px solid;
        border-radius: 4px;
        color: white;
        background-color: var(--grey-2);

        ::placeholder{
          font-weight: 400;
          font-size: 16px;
          color: white;
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

    button{
      height: 48px;
      border-radius: 4px;
      color: white;
      background-color: var(--color-primary);
    }
  }

`;

export default ModalStyle;
