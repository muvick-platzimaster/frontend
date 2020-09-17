import React, { FC } from 'react'

/* Components */
import { Wrapper, Footer, Title, InputForm } from '../../components'

/* Styles */
import { HomeStyled, HomeContent } from './styles'
import { breakpoints } from '../../styles/theme'

/* Containers */
import JumbotronContainer from '../../containers/Jumbotron'
import Faqs from '../../containers/Faqs'

const Home: FC = () => {
   return (
      <HomeStyled>
         <Wrapper maxWidth={breakpoints.lg}>
            <div className="background"></div>
            <HomeContent>
               <Title>Programas, películas sin límite y mucho más.</Title>
               <span>
                  ¿Quieres ver Muvick ya? Ingresa tu email para crear una cuenta
                  o reiniciar tu membresía de Muvick.
               </span>
               <Wrapper maxWidth={breakpoints.md}>
                  <InputForm textButton="Comienza ya" placeholder="Email" />
               </Wrapper>
            </HomeContent>
         </Wrapper>
         <JumbotronContainer />
         <Faqs />
         <Footer />
      </HomeStyled>
   )
}

export default Home
