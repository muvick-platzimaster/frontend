import React, { ReactNode } from 'react'

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

interface PropsButton {
   children: ReactNode
   background?: string
   to: string
}

function Browser({ children }: Props): JSX.Element {
   return <Container>{children}</Container>
}

Browser.LinkButton = function BrowserLinkButton({
   children,
   to,
   ...restProps
}: PropsButton) {
   return (
      <LinkButton to={to} {...restProps}>
         {children}
      </LinkButton>
   )
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
   return <TitleStyled>{children}</TitleStyled>
}

export default Browser
