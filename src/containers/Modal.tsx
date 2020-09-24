import React from 'react'
import { breakpoints } from '../styles/theme'

/* Components */
import { Modal, Browser, Wrapper } from '../components'

/* Icons */
import Close from '../components/Icons/Close'

/* Hooks */
import useFetchData from '../hooks/useFetchData'

const ModalContainer = ({ movie, handleClose }) => {
   const API_KEY = 'e5bbbe23be02b4a93f9a207728ca1844'
   const { data: movieDetail, loading } = useFetchData(
      `/movie/${movie}?api_key=${API_KEY}`
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
               <Modal.Image background={movieDetail.backdrop_path} />
               <Wrapper maxWidth={breakpoints.md}>
                  <Modal.Title>{movieDetail.title}</Modal.Title>

                  <Modal.Button>
                     <Browser.Button background="white">
                        Reproducir
                     </Browser.Button>
                  </Modal.Button>
                  <Modal.CloseButton onClick={handleClose}>
                     <Close />
                  </Modal.CloseButton>
               </Wrapper>
               <Wrapper maxWidth={breakpoints.md}>
                  <Modal.Tag>{year === '2020' && 'NUEVO '}</Modal.Tag>
                  <Modal.Tag>
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
            </Modal.Section>
         </Modal>
      )
   )
}

export default ModalContainer
