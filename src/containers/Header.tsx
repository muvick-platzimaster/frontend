import React, { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

/* Components */
import { Header, Wrapper } from '../components'

/* Styles */
import { breakpoints } from '../styles/theme'

interface Props {
   children: ReactNode
}

function HeaderContainer({ children }: Props): JSX.Element {
   const { pathname } = useLocation()

   return (
      <Header>
         <Wrapper maxWidth={breakpoints.xl}>
            <Header.Grid>
               <Header.Logo />
               {pathname !== '/signin' && (
                  <Header.Button>Sign In</Header.Button>
               )}
            </Header.Grid>
         </Wrapper>

         <Header.Content>{children}</Header.Content>
      </Header>
   )
}

export default HeaderContainer
