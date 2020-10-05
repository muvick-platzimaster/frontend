import React, { useState, useEffect } from 'react'
import ROUTES from '../constants/routes'

/* Hooks */
import useFetchData from '../hooks/useFetchData'

/* Components */
import { Footer, NotFound } from '../components'

/* Containers */
import NavContainer from '../containers/Nav'
import { ApiResponse, Movie } from '../interfaces'

/* i18n */
import { useTranslation } from 'react-i18next'

function NotFoundPage(): JSX.Element {
   const { data: popular } = useFetchData('/movies/popular')
   const [randomMovie, setRandomMovie] = useState<Partial<Movie>>({})
   const { t } = useTranslation(['notfound'])

   useEffect(() => {
      const getRandomMovie = () => {
         if (popular) {
            const randomNumber = Math.floor(
               Math.random() * ((popular as ApiResponse).results.length - 0) + 0
            )
            setRandomMovie((popular as ApiResponse).results[randomNumber])
         }
      }
      getRandomMovie()
   }, [popular])

   return (
      <>
         <NavContainer error404 background={randomMovie.backdrop_path}>
            <NotFound.Title>
               {t('notfound:title', 'Seems like you got lost...')}
            </NotFound.Title>
            <NotFound.Text>
               {t(
                  'notfound:subtitle',
                  'The page you are looking for was moved, removed, renamed or might never existed'
               )}
            </NotFound.Text>
            <NotFound.Frame>
               <NotFound.Button to={ROUTES.BROWSE} background="white">
                  {t('notfound:home', 'Go home')}
               </NotFound.Button>
            </NotFound.Frame>
            <NotFound.Error>
               <span className="error">
                  {t('notfound:code', 'PAGE NOT FOUND')}
               </span>
               <span className="code404">404</span>
            </NotFound.Error>
         </NavContainer>
         <Footer />
      </>
   )
}

export default NotFoundPage
