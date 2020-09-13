import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";

/* Components */
import Wrapper from "../Wrapper";
import Logo from "../Icons/Logo";
import Search from "../Icons/Search";
import Bell from "../Icons/Bell";

/* Styles */
import { HeaderStyled } from "./styles";
import { breakpoints, colors } from "../../styles/theme";

const Navbar: FC = () => {
   const isLogged = true; // FIXME: Esto está hardcodeado
   const SIZE = "24px";
   return (
      <Wrapper maxWidth={breakpoints.xl}>
         <HeaderStyled>
            {/* List */}
            <Fragment>
               <ul>
                  <Link to="/">
                     <Logo width="75px" height="48px" />
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
               </ul>
            </Fragment>
         </HeaderStyled>
      </Wrapper>
   );
};

export default Navbar;
