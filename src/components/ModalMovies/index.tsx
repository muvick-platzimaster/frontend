import React from 'react'
import Modal from 'react-modal'

import { Plus as CloseIcon } from '../Icons'

/* Styles */
import {
   Container,
   Item,
   Description,
   Title,
   Image,
   Content,
   Close,
   RowContainer,
   PlayButton
} from './styles/modalMovies'

/* Types */
type PropsWithChildren = { children: React.ReactNode }
interface Props {
   children: React.ReactNode
   isOpen: boolean
}
interface PropsItem {
   children: React.ReactNode
   background: string
   hidden: boolean
}
interface PropsPlayButton {
   children: React.ReactNode
   to: string
}

interface PropsClose {
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

Modal.setAppElement('#modal')

const ModalMovies = ({ children, isOpen }: Props): JSX.Element => {
   return (
      <Modal
         style={{
            overlay: {
               zIndex: 100,
               backgroundColor: '#00000099'
            },
            content: {
               backgroundColor: 'black',
               borderColor: 'transparent'
            }
         }}
         isOpen={isOpen}
      >
         <Container>{children}</Container>
      </Modal>
   )
}

ModalMovies.Item = function ModalMoviesItem({
   children,
   background,
   hidden
}: PropsItem) {
   return (
      <Item hidden={hidden}>
         <Image theme={{ background }}>
            <Content>{children}</Content>
         </Image>
      </Item>
   )
}

ModalMovies.Title = function ModalMoviesTitle({ children }: PropsWithChildren) {
   return <Title>{children}</Title>
}

ModalMovies.Description = function ModalMoviesDescription({
   children
}: PropsWithChildren) {
   return <Description>{children}</Description>
}

ModalMovies.Image = function ModalMoviesImage({ children }: PropsWithChildren) {
   return <Image>{children}</Image>
}

ModalMovies.Content = function ModalMoviesContent({
   children
}: PropsWithChildren) {
   return <Content>{children}</Content>
}
ModalMovies.RowContainer = function ModalMoviesRowContainer({
   children
}: PropsWithChildren) {
   return <RowContainer>{children}</RowContainer>
}

ModalMovies.PlayButton = function ModalMoviesPlayButton({
   children,
   to
}: PropsPlayButton) {
   return <PlayButton to={to}>{children}</PlayButton>
}

ModalMovies.Close = function ModalMoviesClose({ setIsOpen }: PropsClose) {
   const ICON_SIZE = '100%'
   return (
      <Close onClick={() => setIsOpen(false)}>
         <CloseIcon
            transform="rotate(45)"
            width={ICON_SIZE}
            height={ICON_SIZE}
            color="white"
         />
      </Close>
   )
}

export default ModalMovies
