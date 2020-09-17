import React, { FC } from 'react'

/* Components */
import { Wrapper, Footer, Accordion, Title } from '../../components'

/* Styles */
import { HomeStyled, HomeContent, HomeForm } from './styles'
import { breakpoints } from '../../styles/theme'

/* Containers */
import JumbotronContainer from '../../containers/Jumbotron'
import Faqs from '../../containers/Faqs'

const Home: FC = () => {
   return (
      <HomeStyled>
         <Wrapper maxWidth={breakpoints.xl}>
            <div className="background"></div>
            <HomeContent>
               <Title>Programas, películas sin límite y mucho más.</Title>
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
         <Faqs />
         <Footer />
      </HomeStyled>
   )
}

export default Home
