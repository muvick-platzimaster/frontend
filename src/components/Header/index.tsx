import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/* Styles */
import { Container, LinkButton, Grid, Logo, Content } from './styles'

/* Contants */
import ROUTES from '../../constants/routes'

type PropsWithChildren = { children: ReactNode }

function Header({ children }: PropsWithChildren): JSX.Element {
   return <Container>{children}</Container>
}

Header.Grid = function HeaderGrid({ children }: PropsWithChildren) {
   return <Grid>{children}</Grid>
}

Header.Logo = function HeaderLogo() {
   return (
      <Link to={ROUTES.HOME}>
         <Logo />
      </Link>
   )
}

Header.Button = function HeaderButton({ children }: PropsWithChildren) {
   return <LinkButton to={ROUTES.SIGN_UP}>{children}</LinkButton>
}

Header.Content = function HeaderContent({ children }: PropsWithChildren) {
   return <Content>{children}</Content>
}

export default Header
