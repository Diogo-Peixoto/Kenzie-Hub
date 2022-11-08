import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body,div,ul,li,header,main,nav,div,section,figure,figcaption,img,input,button,form,label,p,a,select,h1,h2,h3,h4,h5{
    padding: 0;
    margin: 0;
    border: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }



  textarea:focus, input:focus, select:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  button:hover{
    filter: brightness(120%);
  }

  :root{
    --color-primary :#27AE60;
    --color-primary-50:#93D7AF;
    --color-secondary: #EB5757;

    --gray-100: #333333;
    --grey-50: #828282;
    --grey-20: #E0E0E0;
    --grey-0: #F5F5F5;
  }

  

  .container{
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem;
  }

  .heading1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 34px;
  }

  .heading2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
  }

  .heading3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }

  .heading4 {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }

  .headline {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }

  .body {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }

  .body-600 {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }

  .caption {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }

  .button{
    height: 40px;
    width: 107px;
    border-radius: 8px;

    cursor: pointer;

    transition: 0.5s;
  }

  .button.button-primary{
    background-color: var(--color-primary);
    color: white;
  }

  @keyframes render{
    0%{
      opacity: 0;
    }

    100%{
      opacity: 1;
    }
  }
  
  

`;
