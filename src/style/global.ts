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

  :root{
    --color-primary:#FF577F;
    --color-primary-focus:#FF427F;
    --color-primary-negativo: #EB5757;
    --color-primary-disable:#59323F;

    --gray-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;  
    --grey-0: #F8F9FA;
    
    --color-sucess:#3FE864;
    --color-error:#E83F5B;
  }

  @media (min-width: 720px){
    html{
      font-size: 21.5px;
    }
  }
`;

export default GlobalStyle;
