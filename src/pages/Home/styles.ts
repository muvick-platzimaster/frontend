import styled from "styled-components";
import { colors } from "../../styles/theme";

export const HomeStyled = styled.div`
   background-color: ${colors["color-body-base"]};
   color: ${colors["color-font-base"]};

   .background {
      position: absolute;
      background-image: url("https://www.casadelaweb.com/wp-content/uploads/2018/10/admission-2974645_1920.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
   }

   &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${colors["color-primary"]};
      opacity: 0.2;
   }
`;

export const HomeContent = styled.div`
   position: absolute;
   color: ${colors["color-font-base"]};
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
      color: ${colors["color-font-base"]};
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
      cursor: pointer;
      border: none;
      background: ${colors["color-primary"]};
      color: ${colors["color-font-base"]};
      font-size: 20px;
      & :focus {
         background-color: ${colors["color-primary"]};
      }
   }
`;
