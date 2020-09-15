import styled from "styled-components";
import { colors } from "../../styles/theme";

export const HomeStyled = styled.div`
   position: relative;
   background-color: ${colors.black};
   color: ${colors.white};
   min-height: 100vh;
   background-image: url("https://www.casadelaweb.com/wp-content/uploads/2018/10/admission-2974645_1920.jpg");
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #275ca2;
      opacity: 0.2;
   }
`;

export const HomeContent = styled.div`
   position: absolute;
   color: ${colors.white};
   margin-top: 180px;
   display: block;
   & h2 {
      font-size: 60px;
      font-weight: bold;
      width: 680px;
   }
   & span {
      display: block;
      margin: 10px 0;
      font-size: 25px;
      color: #deebfb;
   }
`;

export const HomeForm = styled.div`
   margin-top: 50px;
   display: flex;
   align-items: center;
   & input {
      width: 580px;
      height: 55px;
      padding-left: 20px;
      font-size: 20px;
      border: none;
   }
   & button {
      height: 55px;
      width: 176px;
      border: none;
      background: ${colors.primary};
      color: ${colors.white};
      font-size: 20px;
      & :focus {
         background-color: ${colors.primary};
      }
   }
`;
