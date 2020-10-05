import React from 'react'

/* Styles */
import {
   Container,
   Button,
   LinkButton,
   Text,
   Frame,
   TitleStyled
} from './styles'

interface PropsWithChildren {
   children: React.ReactNode
}

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode
   color: string
}

interface PropsLinkButton {
   children: React.ReactNode
   to: string
   color: string
}

function Browser({ children }: PropsWithChildren): JSX.Element {
   return <Container>{children}</Container>
}

Browser.LinkButton = function BrowserLinkButton({
   children,
   to,
   color,
   ...restProps
}: PropsLinkButton) {
   return (
      <LinkButton theme={{ color }} to={to} {...restProps}>
         {children}
      </LinkButton>
   )
}

Browser.Button = function BrowserButton({
   children,
   color,
   ...restProps
}: PropsButton) {
   return (
      <Button theme={{ color }} {...restProps}>
         {children}
      </Button>
   )
}

Browser.Text = function BrowserText({ children }: PropsWithChildren) {
   return <Text>{children}</Text>
}

Browser.Frame = function BrowserFrame({ children }: PropsWithChildren) {
   return <Frame>{children}</Frame>
}

Browser.Title = function BrowserTitle({ children }: PropsWithChildren) {
   return <TitleStyled>{children}</TitleStyled>
}

export default Browser
