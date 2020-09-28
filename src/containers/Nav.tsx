import React, { ReactNode } from 'react'

/* Components */
import { Nav, Wrapper } from '../components'

/* Styles */
import { breakpoints } from '../styles/theme'

/* Icons */
import { Search, Bell } from '../components/Icons/'

/* Context */
import { SwitchState, useSwitch } from '../context/switchContext'

interface Props {
   children: ReactNode
   background: string
}

function NavContainer({ children, background }: Props): JSX.Element {
   const { setSwitchValue } = useSwitch()
   const ICONSIZE = { width: '17px', height: '22px' }
   return (
      <Nav background={background}>
         <Nav.Grid>
            <Nav.Logo />
            <section className="Nav__Menu--open">
               <Nav.Button
                  onClick={() => {
                     setSwitchValue(SwitchState.MOVIES)
                  }}
               >
                  Movies
               </Nav.Button>
               <Nav.Button
                  onClick={() => {
                     setSwitchValue(SwitchState.TV)
                  }}
               >
                  TV Shows
               </Nav.Button>
               <Nav.LinkButton linkTo="/browse/my-list">My list</Nav.LinkButton>
               <Nav.Button
                  onClick={() => {
                     localStorage.removeItem('TOKEN')
                     window.location.reload()
                  }}
               >
                  Logout
               </Nav.Button>
            </section>
            <section className="Nav__Menu--dropdown">
               <Nav.Button className="menu" linkTo="/browse">
                  Explorar
               </Nav.Button>
               <div className="dropdownContent">
                  <Nav.Button
                     onClick={() => {
                        setSwitchValue(SwitchState.MOVIES)
                     }}
                  >
                     Movies
                  </Nav.Button>
                  <Nav.Button
                     onClick={() => {
                        setSwitchValue(SwitchState.TV)
                     }}
                  >
                     TV Shows
                  </Nav.Button>
                  <Nav.LinkButton linkTo="/browse/my-list">
                     My list
                  </Nav.LinkButton>
                  <Nav.Button
                     onClick={() => {
                        localStorage.removeItem('TOKEN')
                        window.location.reload()
                     }}
                  >
                     Logout
                  </Nav.Button>
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
