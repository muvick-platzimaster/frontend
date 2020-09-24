import React, { useState, useEffect } from 'react'

/* Hooks */
import useFetchData from '../hooks/useFetchData'

/* Components */
import { Footer, Title, Browser } from '../components'

/* Containers */
import NavContainer from '../containers/Nav'
import ListsContainer from '../containers/Lists'
import BrowseContainer from '../containers/Browse'
import ModalContainer from '../containers/Modal'

function Browse(): JSX.Element {
   const API_KEY = 'e5bbbe23be02b4a93f9a207728ca1844'
   const { data: popular, loading } = useFetchData(
      `/movie/popular?api_key=${API_KEY}`
   )

   const [show, setShow] = useState(false)
   const [randomMovie, setRandomMovie] = useState('')

   const showModal = () => {
      setShow(true)
      toggleScrollLock()
   }

   const hideModal = () => {
      setShow(false)
      toggleScrollLock()
   }

   const toggleScrollLock = () => {
      document.querySelector('html').classList.toggle('scroll-lock')
   }

   useEffect(() => {
      const getRandomMovie = () => {
         if (popular) {
            const randomNumber = Math.floor(
               Math.random() * (popular.results.length - 0) + 0
            )
            setRandomMovie(popular.results[randomNumber])
         }
      }
      getRandomMovie()
   }, [popular])

   return (
      <>
         <NavContainer background={randomMovie.backdrop_path}>
            <Browser.Title>{randomMovie.title}</Browser.Title>
            <Browser.Text>{randomMovie.overview}</Browser.Text>
            <Browser.Frame>
               <Browser.Button background="white">Reproducir</Browser.Button>
               <Browser.Button background="#6C6E6D" onClick={showModal}>
                  Más información
               </Browser.Button>
            </Browser.Frame>
         </NavContainer>
         {show && (
            <ModalContainer movie={randomMovie.id} handleClose={hideModal} />
         )}
         <BrowseContainer />
         {/* <ListsContainer /> */}
         <Footer />
      </>
   )
}

export default Browse
