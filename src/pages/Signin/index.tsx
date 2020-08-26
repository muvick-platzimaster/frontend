import React from "react";
import { useLocation } from "react-router-dom";

/* Components */
import Header from "../../components/Header";
import SigninForm from "../../components/LoginForm";
import SignupForm from "../../components/SignupForm";

/* Styles */
import { SigninStyled } from "./styles";

const Signup = () => {
   const { pathname } = useLocation();
   console.log(pathname);

   return (
      <SigninStyled>
         <Header />
         {pathname === "/login" && <SigninForm title="Inicia Sesión" />}
         {pathname === "/signup" && <SignupForm title="Regístrate" />}
      </SigninStyled>
   );
};

export default Signup;
