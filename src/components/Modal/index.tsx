import React, { ButtonHTMLAttributes, ReactNode } from 'react'

/* Styles */
import {
   Container,
   Button,
   Section,
   Title,
   TitleContainer,
   Image,
   CloseButton,
   Text,
   Detail,
   More,
   Tag
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

Modal.Button = function ModalButton({ children }: PropsButton) {
   return <Button>{children}</Button>
}

export default Modal
