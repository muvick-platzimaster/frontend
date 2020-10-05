import React from 'react'

/* Styles */
import { Container, Button, Text, Frame, TitleStyled, Error } from './styles'

interface PropsWithChildren {
   children: React.ReactNode
}

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode
   background?: string
   to: string
}

function NotFound({ children }: PropsWithChildren): JSX.Element {
   return <Container>{children}</Container>
}

NotFound.Button = function NotFoundButton({
   children,
   to,
   ...restProps
}: PropsButton) {
   return (
      <Button to={to} {...restProps}>
         {children}
      </Button>
   )
}

NotFound.Text = function NotFoundText({ children }: PropsWithChildren) {
   return <Text>{children}</Text>
}

NotFound.Error = function NotFoundError({ children }: PropsWithChildren) {
   return <Error>{children}</Error>
}

NotFound.Frame = function NotFoundFrame({ children }: PropsWithChildren) {
   return <Frame>{children}</Frame>
}

NotFound.Title = function NotFoundTitle({ children }: PropsWithChildren) {
   return <TitleStyled>{children}</TitleStyled>
}

export default NotFound
