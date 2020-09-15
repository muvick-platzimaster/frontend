import React, { FC } from "react";
import { useLocation } from "react-router-dom";

/* Components */
import SigninForm from "../../components/LoginForm";
import SignupForm from "../../components/SignupForm";

/* Styles */
import { SigninStyled } from "./styles";

const Signup: FC = () => {
   const { pathname } = useLocation();
   console.log(pathname);

   return (
      <SigninStyled>
         <div className="background"></div>
         {pathname === "/login" && <SigninForm title="Inicia Sesión" />}
         {pathname === "/signup" && <SignupForm title="Regístrate" />}
      </SigninStyled>
   );
};

export default Signup;
