import React, { FC, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

/* Components */
import Wrapper from "../Wrapper";
import Logo from "../Icons/Logo";
import Search from "../Icons/Search";
import Bell from "../Icons/Bell";

/* Styles */
import { HeaderStyled, LoginButton } from "./styles";
import { breakpoints, colors } from "../../styles/theme";

const Navbar: FC = () => {
   const { pathname } = useLocation();
   const isLogged = false; // FIXME: Esto está hardcodeado

   const SIZE = "24px";
   return (
      <Wrapper maxWidth={breakpoints.xl}>
         <HeaderStyled>
            {/* List */}
            <Fragment>
               <ul>
                  <Link to="/">
                     <Logo width="100px" height="67px" />
                  </Link>

                  {isLogged && (
                     <Fragment>
                        <li>
                           <Link to="/">Home</Link>{" "}
                           {/* TODO: Hacer el homepage */}
                        </li>
                        <li>
                           <Link to="/tv-shows">Series</Link>{" "}
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
                     </Fragment>
                  )}
               </ul>

               <ul>
                  {isLogged ? (
                     <li>
                        <button className="btn-search">
                           <Search
                              width={SIZE}
                              height={SIZE}
                              stroke={colors["color-font-base"]}
                              strokeWidth="1px"
                           />
                        </button>
                        <button>
                           <Bell
                              width={SIZE}
                              height={SIZE}
                              stroke={colors["color-font-base"]}
                           />
                        </button>
                     </li>
                  ) : (
                     <Link to="/login">
                        <LoginButton>Iniciar sesión</LoginButton>
                     </Link>
                  )}
               </ul>
            </Fragment>
         </HeaderStyled>
      </Wrapper>
   );
};

export default Navbar;
