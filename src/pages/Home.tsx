import React, { useState } from 'react'
import ROUTES from '../constants/routes'

/* Components */
import { Footer, InputForm, Title, Wrapper } from '../components'

/* Styles */
import { breakpoints } from '../styles/theme'

/* Containers */
import JumbotronContainer from '../containers/Jumbotron'
import Faqs from '../containers/Faqs'
import HeaderContainer from '../containers/Header'
import { useHistory } from 'react-router-dom'

function Home(): JSX.Element {
   const [email, setEmail] = useState('')
   const history = useHistory()
   const handleClick = () => {
      if (email) {
         history.push(ROUTES.SIGN_UP)
      }
   }
   return (
      <>
         <HeaderContainer>
            <Wrapper>
               <Title>Programas y películas sin límite y mucho más.</Title>

               <InputForm>
                  <InputForm.Label>
                     ¿Quieres ver Netflix ya? Ingresa tu email para crear una
                     cuenta o reiniciar tu membresía de Netflix.
                  </InputForm.Label>

                  <Wrapper maxWidth={breakpoints.md}>
                     <InputForm.Frame>
                        <InputForm.Input
                           onChange={({ target }) => setEmail(target.value)}
                           placeholder="Email"
                           value={email}
                           type="email"
                        />
                        <InputForm.Button
                           disabled={!email}
                           onClick={handleClick}
                        >
                           <InputForm.Text>Comienza Ya</InputForm.Text>
                           <InputForm.Icon />
                        </InputForm.Button>
                     </InputForm.Frame>
                  </Wrapper>
               </InputForm>
            </Wrapper>
         </HeaderContainer>
         <JumbotronContainer />
         <Faqs />
         <Footer />
      </>
   )
}

export default Home
