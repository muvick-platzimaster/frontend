import React, { ButtonHTMLAttributes, ReactNode } from 'react'

/* Styles */
import {
   Container,
   Button,
   Section,
   Title,
   Image,
   CloseButton,
   Text
} from './styles'

interface Props {
   children: ReactNode
}

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode
}

function Modal({ children }: Props): JSX.Element {
   return <Container>{children}</Container>
}

Modal.Section = function ModalSection({ children }: { children: ReactNode }) {
   return <Section>{children}</Section>
}

Modal.Title = function ModalTitle({ children }: { children: ReactNode }) {
   return <Title>{children}</Title>
}

Modal.Text = function ModalText({ children }: { children: ReactNode }) {
   return <Text>{children}</Text>
}

Modal.Image = function ModalSection(background: string) {
   return <Image background={background} />
}

Modal.CloseButton = function ModalCloseButton({
   children,
   ...restProps
}: PropsButton) {
   return <CloseButton {...restProps}>{children}</CloseButton>
}

Modal.Button = function ModalButton({ children }: PropsButton) {
   return <Button>{children}</Button>
}

export default Modal
