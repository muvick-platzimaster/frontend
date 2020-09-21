import React from 'react'

/* Components */
import { Footer, InputForm, Title, Wrapper } from '../components'

/* Styles */
import { breakpoints } from '../styles/theme'

/* Containers */
import NavContainer from '../containers/Nav'
import ListsContainer from '../containers/Lists'

function Browse(): JSX.Element {
   return (
      <>
         <NavContainer>
            <Title>Nombre de Película</Title>
         </NavContainer>
         <ListsContainer />
         <Footer />
      </>
   )
}

export default Browse
