import React, { FC } from 'react'

/* Components */
import { Wrapper, Footer } from '../../components'

/* Styles */
import { HomeStyled, HomeContent, HomeForm } from './styles'
import { breakpoints } from '../../styles/theme'

/* Containers */
import JumbotronContainer from '../../containers/Jumbotron'

const Home: FC = () => {
   return (
      <HomeStyled>
         <Wrapper maxWidth={breakpoints.xl}>
            <div className="background"></div>
            <HomeContent>
               <h2>Programas, películas sin límite y mucho más.</h2>
               <span>
                  ¿Quieres ver Muvick ya? Ingresa tu email para crear una cuenta
                  o reiniciar tu membresía de Muvick.
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
         <JumbotronContainer />
         <Footer />
      </HomeStyled>
   )
}

export default Home
