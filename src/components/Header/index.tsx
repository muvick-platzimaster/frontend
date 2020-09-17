import React, { FC, Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'

/* Components */
import { Wrapper } from '../'

/* Icons */
import { Search, Bell } from '../Icons'

/* Styles */
import { Container, LoginButton, Grid, IconContainer, Logo } from './styles'
import { breakpoints, colors } from '../../styles/theme'

/* Contants */
import ROUTES from '../../constants/routes'

const Navbar: FC = () => {
   const { pathname } = useLocation()
   const isLogged = false // FIXME: Esto está hardcodeado

   return (
      <Container>
         <Wrapper maxWidth={breakpoints.xl}>
            <Grid>
               <IconContainer to={ROUTES.HOME}>
                  <Logo />
               </IconContainer>
               <LoginButton to={ROUTES.SIGN_UP}>Iniciar Sesión</LoginButton>
            </Grid>
         </Wrapper>
      </Container>
   )

   /* return (
      <Wrapper maxWidth={breakpoints.xl}>
         <HeaderStyled>
            <Fragment>
               <ul>
                  <Link to="/">
                     <Logo width="100px" height="67px" />
                  </Link>

                  {isLogged && (
                     <Fragment>
                        <li>
                           <Link to="/">Home</Link>{' '}
                        </li>
                        <li>
                           <Link to="/tv-shows">Series</Link>{' '}
                        </li>
                        <li>
                           <Link to="/movies">Películas</Link>
                        </li>
                        <li>
                           <Link to="/latest">Últimos</Link>
                        </li>
                        <li>
                           <Link to="/my-list">Mi lista</Link>
                        </li>
                     </Fragment>
                  )}
               </ul>

               <ul>
                  {isLogged ? (
                     <li>
                        <button className="btn-search">
                           <Search
                              width={SIZE}
                              height={SIZE}
                              stroke={colors['color-font-base']}
                              strokeWidth="1px"
                           />
                        </button>
                        <button>
                           <Bell
                              width={SIZE}
                              height={SIZE}
                              stroke={colors['color-font-base']}
                           />
                        </button>
                     </li>
                  ) : (
                     pathname !== '/login' && (
                        <Link to="/login">
                           <LoginButton>Iniciar sesión</LoginButton>
                        </Link>
                     )
                  )}
               </ul>
            </Fragment>
         </HeaderStyled>
      </Wrapper>
   ) */
}

export default Navbar
