import React, { ReactNode } from 'react'

/* Components */
import { Nav, Wrapper } from '../components'

/* Styles */
import { breakpoints } from '../styles/theme'

import { Search } from '../components/Icons/Search'

interface Props {
   children: ReactNode
}

function NavContainer({ children }: Props): JSX.Element {
   return (
      <Nav>
         <Wrapper maxWidth={breakpoints.responsive}>
            <Nav.Grid>
               <Nav.Logo />
               <section>
                  <Nav.Button linkTo="/browse">Inicio</Nav.Button>
                  <Nav.Button linkTo="/browse/programs">Programas</Nav.Button>
                  <Nav.Button linkTo="/browse/movies">Películas</Nav.Button>
                  <Nav.Button linkTo="/latest">Más recientes</Nav.Button>
                  <Nav.Button linkTo="/browse/my-list">Mi lista</Nav.Button>
               </section>
               <Nav.Icon />
            </Nav.Grid>
         </Wrapper>
         <Wrapper maxWidth={breakpoints.lg}>
            <Nav.Content>{children}</Nav.Content>
         </Wrapper>
      </Nav>
   )
}

export default NavContainer
