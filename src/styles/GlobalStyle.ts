import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

export const GlobalStyle = createGlobalStyle`
   * {
      box-sizing: border-box;
   }

   body {
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
   }

   button {
      -webkit-tap-highlight-color: transparent;
   }

   a {
      color: ${colors.white};
      text-decoration: none;
   }
`;
