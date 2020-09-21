import React, { ReactNode } from 'react'

/* Components */
import { Header, Wrapper } from '../components'

/* Styles */
import { breakpoints } from '../styles/theme'

interface Props {
   children: ReactNode
}

function HeaderContainer({ children }: Props): JSX.Element {
   return (
      <Header>
         <Wrapper maxWidth={breakpoints.xl}>
            <Header.Grid>
               <Header.Logo />
               <Header.Button>Inicia Sesión</Header.Button>
            </Header.Grid>
         </Wrapper>

         <Header.Content>{children}</Header.Content>
      </Header>
   )
}

export default HeaderContainer
