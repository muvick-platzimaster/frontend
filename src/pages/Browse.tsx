import React from 'react'

/* Components */
import { Footer, Title, Browser } from '../components'

/* Containers */
import NavContainer from '../containers/Nav'
import ListsContainer from '../containers/Lists'

function Browse(): JSX.Element {
   return (
      <>
         <NavContainer>
            <Browser.Title>Múlan</Browser.Title>
            <Browser.Frame>
               <Browser.Button background="white">Reproducir</Browser.Button>
               <Browser.Button background="#6C6E6D">
                  Más información
               </Browser.Button>
            </Browser.Frame>
         </NavContainer>
         <ListsContainer />
         <Footer />
      </>
   )
}

export default Browse
