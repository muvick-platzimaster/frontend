import React, { ReactNode } from 'react'

/* Components */
import { Nav, Wrapper } from '../components'

/* Styles */
import { breakpoints } from '../styles/theme'

/* Icons */
import { Search, Bell } from '../components/Icons/'

interface Props {
   children: ReactNode
   background: string
}

function NavContainer({ children, background }: Props): JSX.Element {
   const ICONSIZE = { width: '17px', height: '22px' }
   return (
      <Nav background={background}>
         <Nav.Grid>
            <Nav.Logo />
            <section className="Nav__Menu--open">
               <Nav.Button linkTo="/browse">Inicio</Nav.Button>
               <Nav.Button linkTo="/browse/programs">Programas</Nav.Button>
               <Nav.Button linkTo="/browse/movies">Películas</Nav.Button>
               <Nav.Button linkTo="/latest">Más recientes</Nav.Button>
               <Nav.Button linkTo="/browse/my-list">Mi lista</Nav.Button>
            </section>
            <section className="Nav__Menu--dropdown">
               <Nav.Button className="menu" linkTo="/browse">
                  Explorar
               </Nav.Button>
               <div className="dropdownContent">
                  <Nav.Button linkTo="/browse/programs">Programas</Nav.Button>
                  <Nav.Button linkTo="/browse/movies">Películas</Nav.Button>
                  <Nav.Button linkTo="/latest">Más recientes</Nav.Button>
                  <Nav.Button linkTo="/browse/my-list">Mi lista</Nav.Button>
               </div>
            </section>
            <section className="Nav__Icons">
               <Search width={ICONSIZE.width} height={ICONSIZE.height} />
               <Bell width={ICONSIZE.width} height={ICONSIZE.height} />
            </section>
         </Nav.Grid>
         <Wrapper maxWidth={breakpoints.responsive}>
            <Nav.Content>{children}</Nav.Content>
         </Wrapper>
      </Nav>
   )
}

export default NavContainer
