import React, { ButtonHTMLAttributes, ReactNode } from 'react'

/* Styles */
import { Container, Button, Section } from './styles'

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

Modal.Button = function ModalButton({ children, ...restProps }: PropsButton) {
   return <Button {...restProps}>{children}</Button>
}

export default Modal
