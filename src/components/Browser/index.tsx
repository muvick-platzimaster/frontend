import React, { ButtonHTMLAttributes, ReactNode } from 'react'

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
   children: ReactNode
}

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode
   background?: string
}

function Browser({ children }: Props): JSX.Element {
   return <Container>{children}</Container>
}

Browser.LinkButton = function BrowserLinkButton({
   children,
   ...restProps
}: PropsButton) {
   return <LinkButton {...restProps}>{children}</LinkButton>
}

Browser.Button = function BrowserButton({
   children,
   ...restProps
}: PropsButton) {
   return <Button {...restProps}>{children}</Button>
}

Browser.Text = function BrowserText({ children }: { children: ReactNode }) {
   return <Text>{children}</Text>
}

Browser.Frame = function BrowserFrame({ children }: { children: ReactNode }) {
   return <Frame>{children}</Frame>
}

Browser.Title = function BrowserTitle({ children }: { children: ReactNode }) {
   if (`${children}`.length > 5 && `${children}`.length < 10) {
      return <TitleStyled fontSize="5em">{children}</TitleStyled>
   } else if (`${children}`.length > 10) {
      return <TitleStyled fontSize="3em">{children}</TitleStyled>
   }
   return <TitleStyled fontSize="8em">{children}</TitleStyled>
}

export default Browser
