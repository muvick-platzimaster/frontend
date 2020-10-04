import React, { ReactNode, useContext } from 'react'

/* Components */
import { Nav, Wrapper, LanguageButton } from '../components'

/* Styles */
import { breakpoints } from '../styles/theme'

/* Context */
import { SwitchContext } from '../context/SwitchContext'

/* i18n */
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { TOKEN, VERIFY } from '../constants/itemsLocalStorage'

interface Props {
   children: ReactNode
   background?: string
   error404?: boolean
}

function NavContainer({ children, error404, background }: Props): JSX.Element {
   const { setSwitchValue } = useContext(SwitchContext)
   const { t } = useTranslation(['nav'])
   const { pathname } = useLocation()
   return (
      <Nav background={background}>
         <Nav.Grid>
            <Nav.Logo />
            {!error404 && pathname === '/browse' && (
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
                     <Nav.LinkButton linkTo="/browse/my-list">
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
                  <section className="Nav__Menu--dropdown">
                     <Nav.Button className="menu" linkTo="/browse">
                        {t('nav:explore', 'Explore')}
                     </Nav.Button>
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
                        <Nav.LinkButton linkTo="/browse/my-list">
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
                  </section>
               </>
            )}
            {pathname === '/browse' && (
               <section className="Nav__Icons">
                  <Nav.Search />
                  <LanguageButton />
               </section>
            )}
         </Nav.Grid>
         <Wrapper maxWidth={breakpoints.responsive}>
            <Nav.Content>{children}</Nav.Content>
         </Wrapper>
      </Nav>
   )
}

export default NavContainer
