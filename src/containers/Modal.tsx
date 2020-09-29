import React from 'react'
import { breakpoints } from '../styles/theme'

/* Components */
import { Modal, Browser, Wrapper, SimilarCard } from '../components'

/* Icons */
import Close from '../components/Icons/Close'

/* Hooks */
import useFetchData from '../hooks/useFetchData'

import { ApiResponse } from '../interfaces'

interface Props {
   movieId: string | number
   handleClose: () => void
}

const ModalContainer = ({ movieId, handleClose }: Props): JSX.Element => {
   const { data: movieDetail, loading: movieDetailLoading } = useFetchData(
      `/movies/${movieId}/detail`
   )

   // TODO: Este hay que actualizarlo cuando ya tengamos un endpoint en MuvickAPI para hacer este llamado mientras tanto tendrá un any
   const { data: similarMovies, loading: similarMoviesLoading } = useFetchData(
      `/movies/${movieId}/recommendations`
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
      return <h1>Loading...</h1>
   }

   const { backdrop_path: imageUrl, title, overview, genres } = movieDetail

   return (
      <Modal onClick={handleClose}>
         <Modal.Section>
            <Modal.Image background={imageUrl || ''}>
               <Modal.TitleContainer>
                  <Wrapper maxWidth={breakpoints.md}>
                     <Modal.Title>{title || ''}</Modal.Title>
                     <Modal.Button>
                        <Browser.Button background="white">Play</Browser.Button>
                     </Modal.Button>
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
                  {year === '2020' && 'NEW '}
               </Modal.Tag>
               <Modal.Tag color="white">
                  {year} {duration}
               </Modal.Tag>
               <Modal.Detail>
                  <Modal.Text>{overview}</Modal.Text>
                  <Modal.More>
                     Genres:
                     {genres.map((genre) => ` ${genre.name} `)}
                  </Modal.More>
               </Modal.Detail>
            </Wrapper>
            <Wrapper maxWidth={breakpoints.md}>
               <Modal.Title>More titles like this</Modal.Title>
               <SimilarCard.Detail>
                  {((similarMovies as ApiResponse) as ApiResponse)?.results.map(
                     (movie) => (
                        <SimilarCard.Section key={movie.id}>
                           <SimilarCard.Image
                              background={movie.backdrop_path || ''}
                           />
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
