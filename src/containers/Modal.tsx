import React from 'react'
import { breakpoints } from '../styles/theme'

/* Components */
import { Modal, Browser, Wrapper, SimilarCard } from '../components'

/* Icons */
import Close from '../components/Icons/Close'
import Play from '../components/Icons/Play'

/* Hooks */
import useFetchData from '../hooks/useFetchData'

import { ApiResponse } from '../interfaces'

/* i18n */
import { useTranslation } from 'react-i18next'

interface Props {
   movieId: string | number
   handleClose: () => void
   type: string
}

const ModalContainer = ({
   movieId,
   handleClose,
   type = 'movies'
}: Props): JSX.Element => {
   const { t, i18n } = useTranslation(['modal'])
   const { data: movieDetail, loading: movieDetailLoading } = useFetchData(
      `/${type}/${movieId}/detail?language=${i18n.language}`
   )

   // TODO: Este hay que actualizarlo cuando ya tengamos un endpoint en MuvickAPI para hacer este llamado mientras tanto tendrá un any
   const { data: similarMovies, loading: similarMoviesLoading } = useFetchData(
      `/${type}/${movieId}/recommendations?language=${i18n.language}`
   )

   const year = movieDetail
      ? `${movieDetail.release_date}`.substring(0, 4) || ''
      : ''
   const duration = movieDetail
      ? `${Math.floor(movieDetail.runtime / 60)}h ${movieDetail.runtime % 60}m `
      : ''

   if (
      movieDetailLoading ||
      !movieDetail ||
      !similarMovies ||
      similarMoviesLoading
   ) {
      return <h1>{t('modal:loading', 'Loading...')}</h1>
   }

   const {
      backdrop_path: imageUrl,
      original_title: title,
      overview,
      genres
   } = movieDetail

   return (
      <Modal onClick={handleClose}>
         <Modal.Section>
            <Modal.Image background={imageUrl || ''}>
               <Modal.TitleContainer>
                  <Wrapper maxWidth={breakpoints.md}>
                     <Modal.Title>{title || ''}</Modal.Title>
                     <Browser.LinkButton
                        to={`/browse/${title ? 'movie' : 'tv'}/${movieId}`}
                        background="white"
                     >
                        {t('modal:play', 'Play')}
                     </Browser.LinkButton>
                  </Wrapper>
               </Modal.TitleContainer>
            </Modal.Image>

            <Wrapper maxWidth={breakpoints.md}>
               <Modal.CloseButton onClick={handleClose}>
                  <Close />
               </Modal.CloseButton>
            </Wrapper>
            <Wrapper maxWidth={breakpoints.md}>
               <Modal.Tag color="#46D369">
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
                                 {`${movie.overview}`.substring(0, 100)}...
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
