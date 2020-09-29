import React, { useState, useEffect } from 'react'
import ROUTES from '../constants/routes'

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
            <NotFound.Title>Seems like you got lost...</NotFound.Title>
            <NotFound.Text>
               The page you are looking for was moved, removed, renamed or might
               never existed
            </NotFound.Text>
            <NotFound.Frame>
               <NotFound.Button to={ROUTES.BROWSE} background="white">
                  Go home
               </NotFound.Button>
            </NotFound.Frame>
            <NotFound.Error>
               <span className="error">PAGE NOT FOUND</span>
               <span className="code404">404</span>
            </NotFound.Error>
         </NavContainer>
         <Footer />
      </>
   )
}

export default NotFoundPage
