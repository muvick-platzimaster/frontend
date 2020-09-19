import React from 'react'

/* Components */
import { Footer, InputForm, Title, Wrapper } from '../components'

/* Styles */
import { breakpoints } from '../styles/theme'

/* Containers */
import JumbotronContainer from '../containers/Jumbotron'
import Faqs from '../containers/Faqs'
import HeaderContainer from '../containers/Header'

function Browse(): JSX.Element {
   return (
      <>
         <HeaderContainer>
            <Title>Browse</Title>
         </HeaderContainer>
         <Footer />
      </>
   )
}

export default Browse
