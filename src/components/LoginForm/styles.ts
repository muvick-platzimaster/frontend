import styled from "styled-components";
import { colors, colorOpacity } from "../../styles/theme";

export const FormStyled = styled.form`
   position: relative;
   padding: 1rem 2rem;
   border-radius: 1rem;
   background-color: ${colorOpacity(colors["color-primary"], "55")};
   text-align: center;
   z-index: 10;

   .form-field {
      margin-bottom: 3rem;
      position: relative;
      height: 50px;
      width: 100%;
      overflow-x: hidden;
   }
   .form-field input {
      width: 100%;
      height: 100%;
      padding: 20px 0 5px;
      background-color: transparent;
      outline: none;
      color: ${colors["color-font-base"]};
      font-size: 1.2rem;
      border: none;
   }
   .form-field label {
      bottom: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      font-size: 0.8rem;
      pointer-events: none;
      border-bottom: 1px solid ${colors["color-font-base"]};
   }

   .form-field label::after {
      content: "";
      display: initial;
      left: 0;
      bottom: -1px;
      position: absolute;
      height: 100%;
      width: 100%;
      border-bottom: 1px solid ${colors["color-primary"]};
      transform: translateX(-100%);
      transition: all 200ms ease;
   }

   .form-field label span {
      transition: all ease 200ms;
      font-size: 1rem;
      position: absolute;
      bottom: 50%;
      transform: translateY(50%);
      left: 0;
   }

   .form-field input:focus + label span,
   .form-field input:valid + label span {
      transform: translateY(-10px);
      font-size: 0.8rem;
      color: ${colors["color-primary"]};
   }

   .form-field input:focus + label::after,
   .form-field input:valid + label::after {
      transform: translateX(0);
   }
   .form-field input:invalid:focus + label::after {
      transform: translateX(0);
      border-bottom: 1px solid ${colors["color-error"]};
   }

   button {
      width: 100%;
      max-width: 150px;
      margin: 0 auto;
      height: 40px;
      cursor: pointer;
      background-color: ${colors["color-primary"]};
      color: ${colors["color-font-base"]};
      font-size: 1rem;
      border: none;
      outline: none;
      border-radius: 0.4rem;
   }

   button:focus {
      background-color: ${colorOpacity(colors["color-primary"], "AA")};
   }

   & > p {
      margin-top: 2rem;
      font-size: 0.9rem;
      color: ${colors["color-font-base"]};
   }

   & > p a {
      font-weight: 700;
      color: ${colors["color-font-base"]};
   }
`;
