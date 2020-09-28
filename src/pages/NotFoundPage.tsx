import React, { useState, useEffect } from 'react'

/* Hooks */
import useFetchData from '../hooks/useFetchData'

/* Components */
import { Footer, NotFound } from '../components'

/* Containers */
import NavContainer from '../containers/Nav'
import { Movie } from '../interfaces'

function NotFoundPage(): JSX.Element {
   const { data: popular } = useFetchData('/movies/popular')
   const [randomMovie, setRandomMovie] = useState<Partial<Movie>>({})

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
         <NavContainer error404 background={randomMovie.backdrop_path}>
            <NotFound.Title>¿Te perdiste?</NotFound.Title>
            <NotFound.Text>
               No encontramos esa página. Encontrarás muchos títulos para
               explorar en nuestra página de inicio.
            </NotFound.Text>
            <NotFound.Frame>
               <NotFound.Button to="/browse" background="white">
                  Inicio de Muvick
               </NotFound.Button>
            </NotFound.Frame>
            <NotFound.Error>
               <span className="error">Código de error</span>
               <span className="code404">404</span>
            </NotFound.Error>
         </NavContainer>
         <Footer />
      </>
   )
}

export default NotFoundPage
