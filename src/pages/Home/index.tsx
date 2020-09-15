import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";

/* Components */
import Header from "../../components/Header";

/* Styles */
import { HomeStyled, HomeContent, HomeForm } from "./styles";
import { breakpoints } from "../../styles/theme";

const Home = () => {
   return (
      <HomeStyled>
         <Header />
         <Wrapper maxWidth={breakpoints.xl}>
            <HomeContent>
               <h2>Programas, películas sin límite y mucho más.</h2>
               <span>¿Quieres ver Muvick ya?</span>
               <span>
                  Ingresa tu email para crear una cuenta o reiniciar tu
                  membresía de Muvick.
               </span>
               <HomeForm>
                  <input
                     id="email"
                     type="email"
                     name="email"
                     placeholder="Email"
                     required
                  />
                  <button>COMIENZA YA</button>
               </HomeForm>
            </HomeContent>
         </Wrapper>
      </HomeStyled>
   );
};

export default Home;
