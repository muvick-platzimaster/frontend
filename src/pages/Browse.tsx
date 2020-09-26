import React, { useState, useEffect } from 'react'

/* Hooks */
import useFetchData from '../hooks/useFetchData'

/* Components */
import { Footer, Browser } from '../components'

/* Containers */
import NavContainer from '../containers/Nav'
import BrowseContainer from '../containers/Browse'
import ModalContainer from '../containers/Modal'
import { Movie } from '../interfaces'

function Browse(): JSX.Element {
   const { data: popular } = useFetchData('/movies/popular')
   const [show, setShow] = useState(false)
   const [randomMovie, setRandomMovie] = useState<Partial<Movie>>({})

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
               <Browser.Button background="white">Play</Browser.Button>
               <Browser.Button background="#6C6E6D" onClick={showModal}>
                  More information...
               </Browser.Button>
            </Browser.Frame>
         </NavContainer>
         {show && (
            <ModalContainer movieId={randomMovie.id} handleClose={hideModal} />
         )}
         <BrowseContainer />
         {/* <ListsContainer /> */}
         <Footer />
      </>
   )
}

export default Browse
