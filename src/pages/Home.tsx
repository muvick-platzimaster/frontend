import React, { FC } from 'react'

/* Components */
import { Footer, InputForm, Title, Wrapper } from '../components'

/* Styles */

/* Containers */
import JumbotronContainer from '../containers/Jumbotron'
import Faqs from '../containers/Faqs'
import HeaderContainer from '../containers/Header'
import { breakpoints } from '../styles/theme'

const Home: FC = () => {
   return (
      <>
         <HeaderContainer>
            <Title>Programas y películas sin límite y mucho más.</Title>

            <InputForm>
               <InputForm.Label>
                  ¿Quieres ver Netflix ya? Ingresa tu email para crear una
                  cuenta o reiniciar tu membresía de Netflix.
               </InputForm.Label>

               <Wrapper maxWidth={breakpoints.md}>
                  <InputForm.Frame>
                     <InputForm.Input placeholder="Email" />
                     <InputForm.Button>
                        <InputForm.Text>Comienza Ya</InputForm.Text>
                        <InputForm.Icon />
                     </InputForm.Button>
                  </InputForm.Frame>
               </Wrapper>
            </InputForm>
         </HeaderContainer>
         <JumbotronContainer />
         <Faqs />
         <Footer />
      </>
   )
}

export default Home
