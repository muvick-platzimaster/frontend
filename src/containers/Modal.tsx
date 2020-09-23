import React from 'react'

import { Modal } from '../components'

const ModalContainer = ({ handleClose, children }) => {
   return (
      <Modal>
         <Modal.Section>
            {children}
            <Modal.Button onClick={handleClose}>Close</Modal.Button>
         </Modal.Section>
      </Modal>
   )
}

export default ModalContainer
