import React, { ReactNode, useContext, useState, useRef } from 'react'

/* Components */
import { Nav, Wrapper, LanguageButton } from '../components'

/* Styles */
import { breakpoints } from '../styles/theme'

/* Context */
import { SwitchContext } from '../context/SwitchContext'

/* Hooks */
import useOnClickOutside from '../hooks/useOnClickOutside'

/* i18n */
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { TOKEN, VERIFY } from '../constants/itemsLocalStorage'
import ROUTES from '../constants/routes'

interface Props {
   children?: ReactNode
   background?: string
   error404?: boolean
   myList?: boolean
}

function NavContainer({ children, error404, background }: Props): JSX.Element {
   const { setSwitchValue } = useContext(SwitchContext)
   const { t } = useTranslation(['nav'])
   const { pathname } = useLocation()
   const finalBackground = pathname !== ROUTES.MY_LIST ? background : null
   const [showMenu, setShowMenu] = useState(false)
   const ref = useRef()

   useOnClickOutside(ref, () => setShowMenu(false))

   return (
      <Nav error404 background={finalBackground}>
         <Wrapper maxWidth={breakpoints.xl}>
            <Nav.Grid>
               <Nav.Logo />
               {!error404 && (
                  <>
                     <section className="Nav__Menu--open">
                        <Nav.Button
                           onClick={() => {
                              setSwitchValue && setSwitchValue('movies')
                           }}
                        >
                           {t('nav:movies', 'Movies')}
                        </Nav.Button>
                        <Nav.Button
                           onClick={() => {
                              setSwitchValue && setSwitchValue('series')
                           }}
                        >
                           {t('nav:tvshows', 'TV Shows')}
                        </Nav.Button>
                        <Nav.LinkButton linkTo={ROUTES.MY_LIST}>
                           {t('nav:list', 'My list')}
                        </Nav.LinkButton>
                        <Nav.Button
                           onClick={() => {
                              localStorage.removeItem(TOKEN)
                              window.location.reload()
                           }}
                        >
                           {t('nav:logout', 'Logout')}
                        </Nav.Button>
                     </section>
                     <section className="Nav__Menu--dropdown" ref={ref}>
                        <Nav.Button onClick={() => setShowMenu(true)}>
                           {t('nav:explore', 'Explore')}
                        </Nav.Button>
                        {showMenu && (
                           <div className="dropdownContent">
                              <Nav.Button
                                 onClick={() => {
                                    setSwitchValue && setSwitchValue('movies')
                                 }}
                              >
                                 {t('nav:movies', 'Movies')}
                              </Nav.Button>
                              <Nav.Button
                                 onClick={() => {
                                    setSwitchValue && setSwitchValue('series')
                                 }}
                              >
                                 {t('nav:tvshows', 'TV Shows')}
                              </Nav.Button>
                              <Nav.LinkButton linkTo={ROUTES.MY_LIST}>
                                 {t('nav:list', 'My list')}
                              </Nav.LinkButton>
                              <Nav.Button
                                 onClick={() => {
                                    localStorage.removeItem(TOKEN)
                                    localStorage.removeItem(VERIFY)
                                    window.location.reload()
                                 }}
                              >
                                 {t('nav:logout', 'Logout')}
                              </Nav.Button>
                           </div>
                        )}
                     </section>
                  </>
               )}
               {pathname === ROUTES.BROWSE && (
                  <section className="Nav__Icons">
                     <Nav.Search />
                     <LanguageButton />
                  </section>
               )}
            </Nav.Grid>
         </Wrapper>
         {pathname !== ROUTES.MY_LIST && (
            <Wrapper maxWidth={breakpoints.xl}>
               <Nav.Content notFound={error404 || false}>
                  {children}
               </Nav.Content>
            </Wrapper>
         )}
      </Nav>
   )
}

export default NavContainer
