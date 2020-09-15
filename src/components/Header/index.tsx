import React from "react";
import { Link } from "react-router-dom";

/* Components */
import Wrapper from "../Wrapper";
import Logo from "../Icons/Logo";

/* Styles */
import { HeaderStyled, LoginButton } from "./styles";
import { breakpoints } from "../../styles/theme";

const Navbar = () => {
   return (
      <Wrapper maxWidth={breakpoints.xl}>
         <HeaderStyled>
            <Link to="/">
               <Logo width="100px" height="67px" />
            </Link>
            <Link to="/login">
               <LoginButton>Iniciar sesión</LoginButton>
            </Link>
         </HeaderStyled>
      </Wrapper>
   );
};

export default Navbar;
