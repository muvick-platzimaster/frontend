import React, { ButtonHTMLAttributes, ReactNode } from 'react'

/* Icons */
import ArrowRight from '../Icons/ArrowRight'

/* Styles */
import { Container, Button, Text, Frame, TitleStyled } from './styles'

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

Browser.Button = function BrowserButton({
   children,
   ...restProps
}: PropsButton) {
   return <Button {...restProps}>{children}</Button>
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
   if (`${children}`.length > 5 && `${children}`.length < 10) {
      return <TitleStyled fontSize="5em">{children}</TitleStyled>
   } else if (`${children}`.length > 10) {
      return <TitleStyled fontSize="3em">{children}</TitleStyled>
   }
   return <TitleStyled fontSize="8em">{children}</TitleStyled>
}

export default Browser
