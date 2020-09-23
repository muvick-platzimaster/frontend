import React, { useState } from 'react'

/* Components */
import { Footer, Title, Browser } from '../components'

/* Containers */
import NavContainer from '../containers/Nav'
import ListsContainer from '../containers/Lists'
import BrowseContainer from '../containers/Browse'
import ModalContainer from '../containers/Modal'

function Browse(): JSX.Element {
   const [show, setShow] = useState(false)

   const showModal = () => {
      setShow(true)
   }

   const hideModal = () => {
      setShow(false)
   }
   return (
      <>
         <NavContainer>
            <Browser.Title>Múlan</Browser.Title>
            <Browser.Frame>
               <Browser.Button background="white">Reproducir</Browser.Button>
               <Browser.Button background="#6C6E6D" onClick={showModal}>
                  Más información
               </Browser.Button>
            </Browser.Frame>
         </NavContainer>
         {show && (
            <ModalContainer handleClose={hideModal}>Mulán</ModalContainer>
         )}
         <BrowseContainer />
         {/* <ListsContainer /> */}
         <Footer />
      </>
   )
}

export default Browse
