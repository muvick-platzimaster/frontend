import React, { ReactNode } from 'react'

/* Styles */
import { TitleStyled } from './styles'

interface Props {
   children: ReactNode
}
function Title({ children }: Props): JSX.Element {
   return <TitleStyled>{children}</TitleStyled>
}

export default Title
