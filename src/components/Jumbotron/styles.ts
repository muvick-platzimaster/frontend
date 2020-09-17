import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/theme'

export const Container = styled.div`
   border-bottom: 0.5rem solid ${colors['color-body-base']};
   padding: 3rem 0;
   background: ${colors['color-body-dark']};
   color: ${colors['color-font-base']};

   &:first-of-type {
      border-top: 0.5rem solid ${colors['color-body-base']};
   }
`

export const Grid = styled.div`
   display: flex;
   flex-direction: ${({ theme }) => theme.direction};
   align-items: center;
   width: 100%;
   justify-content: space-between;

   @media (max-width: ${breakpoints.md}) {
      flex-direction: column;
   }
`

export const Pane = styled.div`
   width: 50%;

   @media (max-width: ${breakpoints.md}) {
      width: 100%;
      text-align: center;
   }
`

export const Image = styled.img`
   width: 100%;
   height: auto;
`

export const SubTitle = styled.h2`
   font-size: 1.5rem;
`
