import React from "react";

/* Components */
import Header from "../components/Header";
import SigninForm from "../components/Form";

/* Styles */
import styled from "styled-components";
import { colors } from "../styles/theme";

const SignupStyled = styled.div`
   position: relative;
   background-color: ${colors.black};
   color: ${colors.white};
   min-height: 100vh;
   background-image: url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
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
      background-color: black;
      opacity: 0.5;
   }
`;

const Signup = () => {
   return (
      <SignupStyled>
         <Header />
         <SigninForm title="Inicia Sesión" />
      </SignupStyled>
   );
};

export default Signup;
