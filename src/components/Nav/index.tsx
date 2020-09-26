import React from 'react'
import { Link } from 'react-router-dom'

/* Styles */
import { Container, LinkButton, Grid, Logo, Content, Button } from './styles'

/* Contants */
import ROUTES from '../../constants/routes'

// type PropsWithChildren = { children: ReactNode }

interface Props {
   linkTo?: string
   children: React.ReactNode
   background?: string
}

interface PropsLinkButton {
   children: React.ReactNode
   linkTo: string
}

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode
}

function Nav({ children, background }: Props): JSX.Element {
   return <Container background={background}>{children}</Container>
}

Nav.Grid = function NavGrid({ children }: Props) {
   return <Grid>{children}</Grid>
}

Nav.Logo = function NavLogo() {
   return (
      <Link to={ROUTES.HOME}>
         <Logo />
      </Link>
   )
}

Nav.LinkButton = function NavLinkButton({ children, linkTo }: PropsLinkButton) {
   return <LinkButton to={linkTo}>{children}</LinkButton>
}

Nav.Button = function NavButton({ children, ...props }: PropsButton) {
   return <Button {...props}>{children}</Button>
}

Nav.Content = function NavContent({ children }: Props) {
   return <Content>{children}</Content>
}

export default Nav
