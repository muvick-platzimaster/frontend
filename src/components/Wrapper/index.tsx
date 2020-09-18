import React, { ReactNode } from 'react'
import { breakpoints } from '../../styles/theme'

/* Styles */
import { WrapperStyled } from './styles'

interface Props {
   children: ReactNode
   maxWidth?: string
}

function Wrapper({ children, maxWidth = breakpoints.lg }: Props): JSX.Element {
   return <WrapperStyled maxWidth={maxWidth}>{children}</WrapperStyled>
}

export default Wrapper
