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
   const { data, loading } = useFetchData(`/movie/popular?api_key=${API_KEY}`)
   const [show, setShow] = useState(false)
   const [randomMovie, setRandomMovie] = useState('')

   const showModal = () => {
      setShow(true)
   }

   const hideModal = () => {
      setShow(false)
   }

   useEffect(() => {
      const getRandomMovie = () => {
         if (data) {
            const randomNumber = Math.floor(
               Math.random() * (data.results.length - 0) + 0
            )

            setRandomMovie(data.results[randomNumber])
         }
      }
      getRandomMovie()
   }, [data])

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
            <ModalContainer movie={randomMovie} handleClose={hideModal} />
         )}
         <BrowseContainer />
         {/* <ListsContainer /> */}
         <Footer />
      </>
   )
}

export default Browse
