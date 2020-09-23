import React from 'react'
import { breakpoints } from '../styles/theme'

/* Components */
import { Modal, Browser, Wrapper } from '../components'

/* Icons */
import Close from '../components/Icons/Close'

const ModalContainer = ({ movie, handleClose }) => {
   return (
      <Modal>
         <Modal.Section>
            <Modal.Image background={movie.backdrop_path} />
            <Wrapper maxWidth={breakpoints.md}>
               <Modal.Title>{movie.title}</Modal.Title>

               <Modal.Button>
                  <Browser.Button background="white">Reproducir</Browser.Button>
               </Modal.Button>
               <Modal.CloseButton onClick={handleClose}>
                  <Close />
               </Modal.CloseButton>
            </Wrapper>
            <Wrapper maxWidth={breakpoints.md}>
               <Modal.Text>{movie.overview}</Modal.Text>
            </Wrapper>
         </Modal.Section>
      </Modal>
   )
}

export default ModalContainer
