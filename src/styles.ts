import { createGlobalStyle } from "styled-components";

export const colors = {
  cream: "#FFEBD9",
  pink: "#E66767",
  white: "#FFFFFF",
};

export const GlobalCss = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto, sans-serif';
}

body{
    background-color: red;
}

.container{
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
}

`;
