import React, { useState, useEffect } from 'react'

/* Hooks */
import useFetchData from '../hooks/useFetchData'

/* Components */
import { Footer, Browser } from '../components'

/* Containers */
import NavContainer from '../containers/Nav'
import BrowseContainer from '../containers/Browse'
import ModalContainer from '../containers/Modal'
import { ApiResponse, Movie } from '../interfaces'

/* i18n */
import { useTranslation } from 'react-i18next'
import UserVerificationContainer from '../containers/UserVerification'
import { TOKEN, VERIFY } from '../constants/itemsLocalStorage'
import { colors } from '../styles/theme'

/* Google Analytics */
import { Analytics } from '../analytics'
Analytics(window.location.pathname + window.location.search)

function Browse(): JSX.Element {
   const { t, i18n } = useTranslation(['browse', 'modal'])

   const API = `/movies/popular?language=${i18n.language}`
   const options = {
      dependencies: [API],
      headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` }
   }
   const { data: popular, loading } = useFetchData(API, options)
   const [show, setShow] = useState(false)
   const [randomMovie, setRandomMovie] = useState<Partial<Movie>>({})

   const { confirmed } = JSON.parse(localStorage.getItem(VERIFY) || '{}')

   const showModal = () => {
      setShow(true)
      toggleScrollLock()
   }

   const hideModal = () => {
      setShow(false)
      toggleScrollLock()
   }

   const toggleScrollLock = () => {
      document.querySelector('html')?.classList.toggle('scroll-lock')
   }

   useEffect(() => {
      const getRandomMovie = () => {
         if (popular) {
            const randomNumber = Math.floor(
               Math.random() * ((popular as ApiResponse)?.results.length - 0) +
                  0
            )
            setRandomMovie((popular as ApiResponse).results[randomNumber])
         }
      }
      getRandomMovie()
   }, [popular])

   return (
      <>
         {!confirmed && <UserVerificationContainer />}

         <NavContainer background={randomMovie.backdrop_path}>
            <Browser.Title>
               {loading ? `${t('modal:loading')}...` : randomMovie.title}
            </Browser.Title>
            {!loading && (
               <>
                  <Browser.Text>{randomMovie.overview}</Browser.Text>
                  <Browser.Frame>
                     <Browser.LinkButton
                        to={`/browse/${randomMovie.title ? 'movie' : 'tv'}/${
                           randomMovie.id
                        }`}
                        color={colors['color-primary']}
                     >
                        {t('browse:button.play', 'Play')}
                     </Browser.LinkButton>
                     <Browser.Button
                        color={colors['color-gray-dark']}
                        onClick={showModal}
                     >
                        {t('browse:button.more', 'More information...')}
                     </Browser.Button>
                  </Browser.Frame>
               </>
            )}
         </NavContainer>
         {show && randomMovie.id && (
            <ModalContainer movieId={randomMovie.id} handleClose={hideModal} />
         )}
         <BrowseContainer />
         <Footer />
      </>
   )
}

export default Browse
