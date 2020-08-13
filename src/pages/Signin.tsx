import React from "react";

/* Components */
import Header from "../components/Header";
import SigninForm from "../components/Form";

/* Styles */
import styled from "styled-components";
import { colors } from "../styles/theme";

const SignupStyled = styled.div`
   background-color: ${colors.black};
   color: ${colors.white};
   min-height: 100vh;
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
