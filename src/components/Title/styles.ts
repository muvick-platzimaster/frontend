import styled from 'styled-components'
import { breakpoints } from '../../styles/theme'

export const TitleStyled = styled.h1`
   font-size: 3.5rem;
   margin-bottom: 0;
   line-height: 3.5rem;

   @media (max-width: ${breakpoints.sm}) {
      font-size: 3rem;
      line-height: 3rem;
   }

   @media (max-width: ${breakpoints.xs}) {
      font-size: 1.75rem;
      line-height: 1.75rem;
   }
`
