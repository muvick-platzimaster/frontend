import React, { ButtonHTMLAttributes, ReactNode } from 'react'

/* Styles */
import { Container, Button, Text, Frame, TitleStyled, Error } from './styles'

interface Props {
   children: ReactNode
}

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode
   background?: string
}

function NotFound({ children }: Props): JSX.Element {
   return <Container>{children}</Container>
}

NotFound.Button = function NotFoundButton({
   children,
   ...restProps
}: PropsButton) {
   return <Button {...restProps}>{children}</Button>
}

NotFound.Text = function NotFoundText({ children }: { children: ReactNode }) {
   return <Text>{children}</Text>
}

NotFound.Error = function NotFoundError({ children }: { children: ReactNode }) {
   return <Error>{children}</Error>
}

NotFound.Frame = function NotFoundFrame({ children }: { children: ReactNode }) {
   return <Frame>{children}</Frame>
}

NotFound.Title = function NotFoundTitle({ children }: { children: ReactNode }) {
   return <TitleStyled fontSize="5.5em">{children}</TitleStyled>
}

export default NotFound
