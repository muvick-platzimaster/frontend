import React, { FC } from 'react'

/* Components */
import { Footer } from '../components'

/* Styles */

/* Containers */
import JumbotronContainer from '../containers/Jumbotron'
import Faqs from '../containers/Faqs'
import HeaderContainer from '../containers/Header'

const Home: FC = () => {
   return (
      <>
         <HeaderContainer />
         <JumbotronContainer />
         <Faqs />
         <Footer />
      </>
   )
}

export default Home
