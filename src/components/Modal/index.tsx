import React, { ButtonHTMLAttributes, ReactNode } from 'react'

/* Styles */
import {
   Container,
   Section,
   Title,
   TitleContainer,
   Image,
   CloseButton,
   Text,
   Detail,
   More,
   Tag,
   Around
} from './styles'

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode
   background?: string
}

function Modal({ children, ...restProps }: PropsButton) {
   return (
      <Container>
         {children}
         <Around {...restProps}></Around>
      </Container>
   )
}

Modal.Section = function ModalSection({ children }: { children: ReactNode }) {
   return <Section>{children}</Section>
}

Modal.Title = function ModalTitle({ children }: { children: ReactNode }) {
   return <Title>{children}</Title>
}

Modal.TitleContainer = function ModalTitleContainer({
   children
}: {
   children: ReactNode
}) {
   return <TitleContainer>{children}</TitleContainer>
}

Modal.Text = function ModalText({ children }: { children: ReactNode }) {
   return <Text>{children}</Text>
}

Modal.Tag = function ModalTag({ children, ...restProps }: PropsButton) {
   return <Tag {...restProps}>{children}</Tag>
}

Modal.Detail = function ModalDetail({ children }: { children: ReactNode }) {
   return <Detail>{children}</Detail>
}

Modal.More = function ModalMore({ children }: { children: ReactNode }) {
   return <More>{children}</More>
}

Modal.Image = function ModalSection({ children, ...restProps }: PropsButton) {
   return <Image {...restProps}>{children}</Image>
}

Modal.CloseButton = function ModalCloseButton({
   children,
   ...restProps
}: PropsButton) {
   return <CloseButton {...restProps}>{children}</CloseButton>
}

export default Modal
