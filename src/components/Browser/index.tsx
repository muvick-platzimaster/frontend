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

interface Props {
   children: React.ReactNode
}

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode
   background?: string
}

interface PropsLinkButton {
   children: React.ReactNode
   to: string
   color: string
}

function Browser({ children }: Props): JSX.Element {
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

Browser.Text = function BrowserText({ children }: { children: ReactNode }) {
   if (`${children}`.length > 100) {
      return <Text>{`${children}`.substring(0, 100)}...</Text>
   }
   return <Text>{children}</Text>
}

Browser.Frame = function BrowserFrame({ children }: { children: ReactNode }) {
   return <Frame>{children}</Frame>
}

Browser.Title = function BrowserTitle({ children }: { children: ReactNode }) {
   return <TitleStyled>{children}</TitleStyled>
}

export default Browser
