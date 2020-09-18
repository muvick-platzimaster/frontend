import React, { ReactNode } from 'react'

/* Components */
import { Header, Wrapper } from '../../components/'
import { breakpoints } from '../../styles/theme'

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
         <Wrapper maxWidth={breakpoints.lg}>
            <Header.Content>{children}</Header.Content>
         </Wrapper>
      </Header>
   )
}

export default HeaderContainer
