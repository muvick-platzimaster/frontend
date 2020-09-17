import React, { FC } from 'react'

/* Components */
import { Header, Wrapper, InputForm, Title } from '../../components/'
import { breakpoints } from '../../styles/theme'

/* styles */
import { Container, HomeContent, Subtitle } from './styles'

const HeaderContainer: FC = () => {
   return (
      <Container>
         <Header />
         <Wrapper maxWidth={breakpoints.lg}>
            <HomeContent>
               <Title>Programas, películas sin límite y mucho más.</Title>
               <Subtitle>
                  ¿Quieres ver Muvick ya? Ingresa tu email para crear una cuenta
                  o reiniciar tu membresía de Muvick.
               </Subtitle>
               <Wrapper maxWidth={breakpoints.md}>
                  <InputForm textButton="Comienza ya" placeholder="Email" />
               </Wrapper>
            </HomeContent>
         </Wrapper>
      </Container>
   )
}

export default HeaderContainer
