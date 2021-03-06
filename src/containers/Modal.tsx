import React from 'react'
import { breakpoints, colors } from '../styles/theme'

/* Components */
import { Modal, Browser, Wrapper, SimilarCard } from '../components'

/* Icons */
import Close from '../components/Icons/Close'
import Play from '../components/Icons/Play'

/* Hooks */
import useFetchData from '../hooks/useFetchData'

import { ApiResponse, MovieDetails } from '../interfaces'

/* i18n */
import { useTranslation } from 'react-i18next'
import { TOKEN } from '../constants/itemsLocalStorage'

interface Props {
   movieId: string | number
   handleClose: () => void
   type?: string
}

const ModalContainer = ({
   movieId,
   handleClose,
   type = 'movies'
}: Props): JSX.Element => {
   const { t, i18n } = useTranslation(['modal'])
   const options = {
      headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` }
   }
   const { data: movieDetail, loading: movieDetailLoading } = useFetchData(
      `/${type}/${movieId}/detail?language=${i18n.language}`,
      options
   )

   const { data: similarMovies, loading: similarMoviesLoading } = useFetchData(
      `/${type}/${movieId}/recommendations?language=${i18n.language}`,
      options
   )

   const year = movieDetail
      ? `${(movieDetail as MovieDetails).release_date}`.substring(0, 4) || ''
      : ''
   const duration = movieDetail
      ? `${Math.floor((movieDetail as MovieDetails).runtime / 60)}h ${
         (movieDetail as MovieDetails).runtime % 60
      }m `
      : ''

   if (movieDetailLoading || similarMoviesLoading) {
      return <span></span>
   }

   const {
      backdrop_path: imageUrl,
      title,
      overview,
      genres
   } = movieDetail as MovieDetails

   return (
      <Modal onClick={handleClose}>
         <Modal.Section>
            <Modal.Image background={imageUrl || ''}>
               <Modal.TitleContainer>
                  <Wrapper maxWidth={breakpoints.md}>
                     <Modal.Title>{title || ''}</Modal.Title>
                     <Browser.LinkButton
                        to={`/browse/${title ? 'movie' : 'tv'}/${movieId}`}
                        color={colors['color-primary']}
                     >
                        {t('modal:play', 'Play')}
                     </Browser.LinkButton>
                  </Wrapper>
               </Modal.TitleContainer>
            </Modal.Image>

            <Wrapper maxWidth={breakpoints.md}>
               <Modal.CloseButton onClick={handleClose}>
                  <Close color="white" />
               </Modal.CloseButton>
            </Wrapper>
            <Wrapper maxWidth={breakpoints.md}>
               <Modal.Tag color={colors['color-success']}>
                  {year === '2020' && `${t('modal:new', 'NEW')}`}
               </Modal.Tag>
               <Modal.Tag color="white">
                  {year} {duration}
               </Modal.Tag>
               <Modal.Detail>
                  <Modal.Text>{overview}</Modal.Text>
                  <Modal.More>
                     {t('modal:genres', 'Genres:')}
                     {genres.map((genre) => ` ${genre.name} `)}
                  </Modal.More>
               </Modal.Detail>
            </Wrapper>
            <Wrapper maxWidth={breakpoints.md}>
               <Modal.Title>
                  {t('modal:more', 'More titles like this')}
               </Modal.Title>
               <SimilarCard.Detail>
                  {((similarMovies as ApiResponse) as ApiResponse)?.results.map(
                     (movie) => (
                        <SimilarCard.Section key={movie.id}>
                           <SimilarCard.Image
                              to={`/browse/${movie.title ? 'movie' : 'tv'}/${
                                 movie.id
                              }`}
                              background={movie.backdrop_path || ''}
                           >
                              <Play />
                           </SimilarCard.Image>
                           <Wrapper maxWidth={breakpoints.md}>
                              <SimilarCard.Text>{movie.title}</SimilarCard.Text>
                              <SimilarCard.Tag>
                                 {`${movie.release_date}`.substring(0, 4)}
                              </SimilarCard.Tag>
                              <SimilarCard.Text>
                                 {`${movie.overview}`.substring(0, 100)}
                                 ...
                              </SimilarCard.Text>
                           </Wrapper>
                        </SimilarCard.Section>
                     )
                  )}
               </SimilarCard.Detail>
            </Wrapper>
         </Modal.Section>
      </Modal>
   )
}

export default ModalContainer
