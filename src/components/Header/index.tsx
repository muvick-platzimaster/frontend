import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";

/* Components */
import Wrapper from "../Wrapper";
import Logo from "../Icons/Logo";

/* Styles */
import { HeaderStyled } from "./styles";
import { breakpoints } from "../../styles/theme";

const Navbar: FC = () => {
   const isLogged = true; // FIXME: Esto está hardcodeado
   return (
      <Wrapper maxWidth={breakpoints.xl}>
         <HeaderStyled>
            {/* LOGO */}
            <Link to="/">
               <Logo width="75px" height="48px" />
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
            </Fragment>
         </HeaderStyled>
      </Wrapper>
   );
};

export default Navbar;
