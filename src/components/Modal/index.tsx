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

interface PropsImage extends React.ImgHTMLAttributes<HTMLImageElement> {
   children: ReactNode
   background?: string
}

interface PropsWithChildren {
   children: ReactNode
}

const Modal = ({ children }: PropsButton): JSX.Element => {
   return (
      <Container>
         {children}
         <Around></Around>
      </Container>
   )
}

Modal.Section = function ModalSection({ children }: PropsWithChildren) {
   return <Section>{children}</Section>
}

Modal.Title = function ModalTitle({ children }: PropsWithChildren) {
   return <Title>{children}</Title>
}

Modal.TitleContainer = function ModalTitleContainer({
   children
}: {
   children: ReactNode
}) {
   return <TitleContainer>{children}</TitleContainer>
}

Modal.Text = function ModalText({ children }: PropsWithChildren) {
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

Modal.Image = function ModalSection({ children, ...restProps }: PropsImage) {
   return <Image {...restProps}>{children}</Image>
}

Modal.CloseButton = function ModalCloseButton({
   children,
   ...restProps
}: PropsButton) {
   return <CloseButton {...restProps}>{children}</CloseButton>
}

export default Modal
