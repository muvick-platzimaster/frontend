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

/* i18n */
import { useTranslation } from 'react-i18next'

/* Google Analytics */
import { Analytics } from '../analytics'
Analytics(window.location.pathname + window.location.search)

function Home(): JSX.Element {
   const [email, setEmail] = useState('')
   const history = useHistory()
   const handleClick = () => {
      if (email) {
         history.push(ROUTES.SIGN_UP)
      }
   }
   const { t } = useTranslation(['home'])

   return (
      <>
         <HeaderContainer>
            <Wrapper>
               <Title>
                  {t('home:title', 'Unlimited movies, TV shows, and more.')}
               </Title>

               <InputForm>
                  <InputForm.Label>
                     {t(
                        'home:subtitle',
                        'Ready to watch? Enter your email to create or restart your membership.'
                     )}
                  </InputForm.Label>

                  <Wrapper maxWidth={breakpoints.md}>
                     <InputForm.Frame>
                        <InputForm.Input
                           onChange={({ target }) => setEmail(target.value)}
                           placeholder={t('home:form.email', 'Email')}
                           value={email}
                           type="email"
                        />
                        <InputForm.Button
                           disabled={!email}
                           onClick={handleClick}
                        >
                           <InputForm.Text>
                              {t('home:form.button', 'Get started')}
                           </InputForm.Text>
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
