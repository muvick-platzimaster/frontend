import React from 'react'

/* Components */
import { Footer, Title } from '../components'

/* Containers */
import NavContainer from '../containers/Nav'
import ListsContainer from '../containers/Lists'
import BrowseContainer from '../containers/Browse'

function Browse(): JSX.Element {
   return (
      <>
         {/* <NavContainer>
            <Title>Nombre de Película</Title>
         </NavContainer>
         <ListsContainer />
         <Footer /> */}
         <BrowseContainer />
      </>
   )
}

export default Browse
