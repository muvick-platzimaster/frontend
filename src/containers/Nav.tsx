import React, { ReactNode } from 'react'

/* Components */
import { Nav, Wrapper } from '../components'

/* Styles */
import { breakpoints } from '../styles/theme'

/* Context */
import { SwitchState, useSwitch } from '../context/switchContext'

interface Props {
   children: ReactNode
   background: string
   error404: boolean
}

function NavContainer({ children, error404, background }: Props): JSX.Element {
   const { setSwitchValue } = useSwitch()

   return (
      <Nav background={background}>
         <Nav.Grid>
            <Nav.Logo />
            {!error404 && (
               <>
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
               </>
            )}

            <section className="Nav__Icons">
               <Nav.Search />
            </section>
         </Nav.Grid>
         <Wrapper maxWidth={breakpoints.responsive}>
            <Nav.Content>{children}</Nav.Content>
         </Wrapper>
      </Nav>
   )
}

export default NavContainer
