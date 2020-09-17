import React, { FC } from 'react'

/* Components */
import { Wrapper, Footer, Title, InputForm } from '../../components'

/* Styles */
import { HomeContent, Subtitle } from './styles'
import { breakpoints } from '../../styles/theme'

/* Containers */
import JumbotronContainer from '../../containers/Jumbotron'
import Faqs from '../../containers/Faqs'
import HeaderContainer from '../../containers/Header'

const Home: FC = () => {
   return (
      <>
         <HeaderContainer>
            <Wrapper maxWidth={breakpoints.lg}>
               <HomeContent>
                  <Title>Programas, películas sin límite y mucho más.</Title>
                  <Subtitle>
                     ¿Quieres ver Muvick ya? Ingresa tu email para crear una
                     cuenta o reiniciar tu membresía de Muvick.
                  </Subtitle>
                  <Wrapper maxWidth={breakpoints.md}>
                     <InputForm textButton="Comienza ya" placeholder="Email" />
                  </Wrapper>
               </HomeContent>
            </Wrapper>
         </HeaderContainer>
         <JumbotronContainer />
         <Faqs />
         <Footer />
      </>
   )
}

export default Home
