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
               <Title>Unlimited movies, TV shows, and more.</Title>

               <InputForm>
                  <InputForm.Label>
                     Ready to watch? Enter your email to create or restart your
                     membership.
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
                           <InputForm.Text>Get started</InputForm.Text>
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
