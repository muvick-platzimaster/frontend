import React, { ReactNode } from 'react'

/* Styles */
import { Container } from './styles'

type PropsWithChildren = { children: ReactNode }

function Lists({ children }: PropsWithChildren): JSX.Element {
   return <Container>{children}</Container>
}

export default Lists
