import React, { FC, ReactNode } from 'react'

/* Components */
import { Header } from '../../components/'

/* styles */
import { Container } from './styles'

interface Props {
   children: ReactNode
}

const HeaderContainer: FC<Props> = ({ children }: Props) => {
   return (
      <Container>
         <Header />
         {children}
      </Container>
   )
}

export default HeaderContainer
