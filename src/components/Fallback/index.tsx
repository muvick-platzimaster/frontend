import React from 'react'
import { colors } from '../../styles/theme'
import { Spinner } from '../Icons'

/* Styles */
import { Container } from './styles/fallback'

/* Types */
type PropsWithChildren = { children: React.ReactNode }

const Fallback = ({ children }: PropsWithChildren): JSX.Element => {
   return <Container>{children}</Container>
}

Fallback.Spinner = function FallbackSpinner() {
   return <Spinner color={colors['color-primary']} height="5rem" width="5rem" />
}

export default Fallback
