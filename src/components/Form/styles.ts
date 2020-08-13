import styled from "styled-components";
import { colors } from "../../styles/theme";

export const FormStyled = styled.form`
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
      color: ${colors.white};
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
      border-bottom: 1px solid ${colors.secondary};
   }

   .form-field label::after {
      content: "";
      display: initial;
      left: 0;
      bottom: -1px;
      position: absolute;
      height: 100%;
      width: 100%;
      border-bottom: 1px solid ${colors.primary};
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
      color: ${colors.primary};
   }

   .form-field input:focus + label::after,
   .form-field input:valid + label::after {
      transform: translateX(0);
   }

   button {
      width: 100%;
      height: 45px;
      cursor: pointer;
      background-color: ${colors.primary};
      color: ${colors.white};
      font-size: 1rem;
      font-weight: bold;
      border: none;
      outline: none;
      border-radius: 0.4rem;
   }
`;
