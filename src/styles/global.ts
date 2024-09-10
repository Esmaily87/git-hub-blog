// 1. Importar a biblioteca styled-components instalada por npm install styled-components
import { createGlobalStyle } from "styled-components";

// 2. exportar o GlobalStyle para ser usado no app.tsx

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    h1 {
       

        size: 30px;
    }
    h3 {
        

        size: 14px;
    }

    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    }

`;


