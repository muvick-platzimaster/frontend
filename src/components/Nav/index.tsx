import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/* Styles */
import { Container, LinkButton, Grid, Logo, Content } from './styles'

/* Contants */
import ROUTES from '../../constants/routes'

// type PropsWithChildren = { children: ReactNode }

interface Props {
   className?: string
   linkTo?: string
   children: ReactNode
   background?: string
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

Nav.Button = function NavButton({ className, children, linkTo }: Props) {
   return (
      <LinkButton className={className} to={linkTo}>
         {children}
      </LinkButton>
   )
}

Nav.Content = function NavContent({ children }: Props) {
   return <Content>{children}</Content>
}

export default Nav
