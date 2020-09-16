import styled from "styled-components";
import { colors } from "../../styles/theme";

export const SigninStyled = styled.div`
   color: ${colors["color-font-base"]};

   .background {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      min-height: 100vh;
      background-image: url("https://www.casadelaweb.com/wp-content/uploads/2018/10/admission-2974645_1920.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
   }

   .background::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: black;
      opacity: 0.5;
   }
`;
