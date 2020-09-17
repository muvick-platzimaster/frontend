import React, { FC, ReactNode } from 'react'

/* Styles */
import { TitleStyled } from './styles'

interface Props {
   children: ReactNode
}

const Title: FC<Props> = ({ children }: Props) => {
   return <TitleStyled>{children}</TitleStyled>
}

export default Title
