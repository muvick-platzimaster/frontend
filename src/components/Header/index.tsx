import React, { FC, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

/* Components */
import Wrapper from "../Wrapper";
import Logo from "../Icons/Logo";

/* Styles */
import { HeaderStyled, LoginButton } from "./styles";
import { breakpoints } from "../../styles/theme";

const Navbar: FC = () => {
   const { pathname } = useLocation();
   const isLogged = pathname == "/" ? false : true; // FIXME: Esto está hardcodeado
   return (
      <Wrapper maxWidth={breakpoints.xl}>
         <HeaderStyled>
            {/* LOGO */}
            <Link to="/">
               <Logo width="100px" height="67px" />
            </Link>

            {/* List */}
            <Fragment>
               {isLogged && (
                  <ul>
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="/tv-shows">Series</Link>
                     </li>
                     <li>
                        <Link to="/movies">Películas</Link>
                     </li>
                     <li>
                        <Link to="/latest">Últimos</Link>
                     </li>
                     <li>
                        <Link to="/my-list">Mi lista</Link>
                     </li>
                  </ul>
               )}
               {!isLogged && (
                  <Link to="/login">
                     <LoginButton>Iniciar sesión</LoginButton>
                  </Link>
               )}
            </Fragment>
         </HeaderStyled>
      </Wrapper>
   );
};

export default Navbar;
