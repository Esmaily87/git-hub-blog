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
        color: red;

        size: 30px;
    }

`;


