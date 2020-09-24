import React, { useEffect, useState } from 'react'
import { breakpoints } from '../styles/theme'

/* Components */
import { Modal, Browser, Wrapper, SimilarCard } from '../components'

/* Icons */
import Close from '../components/Icons/Close'

/* Hooks */
import useFetchData from '../hooks/useFetchData'

const ModalContainer = ({ movie, handleClose }) => {
   const API_KEY = 'e5bbbe23be02b4a93f9a207728ca1844'
   const { data: movieDetail, loading } = useFetchData(
      `/movie/${movie}?api_key=${API_KEY}`
   )
   const { data: similarMovies, loading: similarLoading } = useFetchData(
      `/movie/${movie}/recommendations?api_key=${API_KEY}`
   )

   const year = movieDetail
      ? `${movieDetail.release_date}`.substring(0, 4) || ''
      : ''
   const duration = movieDetail
      ? `${Math.floor(movieDetail.runtime / 60)}h ${movieDetail.runtime % 60}m `
      : ''

   return (
      movieDetail && (
         <Modal>
            <Modal.Section>
               <Modal.Image background={movieDetail.backdrop_path || ''}>
                  <Modal.TitleContainer>
                     <Wrapper maxWidth={breakpoints.md}>
                        <Modal.Title>{movieDetail.title || ''}</Modal.Title>
                        <Modal.Button>
                           <Browser.Button background="white">
                              Reproducir
                           </Browser.Button>
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
                     {year === '2020' && 'NUEVO '}
                  </Modal.Tag>
                  <Modal.Tag color="white">
                     {year} {duration}
                  </Modal.Tag>
                  <Modal.Detail>
                     <Modal.Text>{movieDetail.overview}</Modal.Text>
                     <Modal.More>
                        Generos:
                        {movieDetail.genres.map((genre) => ` ${genre.name} `)}
                     </Modal.More>
                  </Modal.Detail>
               </Wrapper>
               <Wrapper maxWidth={breakpoints.md}>
                  <Modal.Title>Más títulos similares a este</Modal.Title>
                  <SimilarCard.Detail>
                     {similarMovies?.results.map((movie) => (
                        <SimilarCard.Section key={movie.id}>
                           <SimilarCard.Image
                              background={movie.backdrop_path || ''}
                           ></SimilarCard.Image>
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
                     ))}
                  </SimilarCard.Detail>
               </Wrapper>
            </Modal.Section>
         </Modal>
      )
   )
}

export default ModalContainer
