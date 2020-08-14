import React from "react";
import { Link } from "react-router-dom";

/* Components */
import Wrapper from "../Wrapper";
import Logo from "../Icons/Logo";

/* Styles */
import { HeaderStyled } from "./styles";

const Navbar = () => {
   return (
      <HeaderStyled>
         <Wrapper>
            <Link to="/">
               <Logo width="75px" height="48px" />
            </Link>
         </Wrapper>
      </HeaderStyled>
   );
};

export default Navbar;
