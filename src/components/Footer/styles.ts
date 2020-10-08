import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { breakpoints, colors } from '../../styles/theme'

export const Container = styled.section`
   padding: 2rem 0;
   color: ${colors['color-font-muted']};
`

export const Grid = styled.div``

export const Column = styled.div`
   display: flex;
   flex-direction: column;
`

export const Row = styled.div`
   display: grid;
   grid-column-gap: 2rem;
   justify-content: space-between;
   grid-template-columns: 3fr 1fr 1fr;
   width: 100%;

   @media (max-width: ${breakpoints.sm}) {
      grid-template-columns: 1fr;
   }
`

export const Title = styled.p`
   margin-bottom: 1em;
`

export const Text = styled.p`
   font-size: 0.8rem;

   @media (max-width: ${breakpoints.sm}) {
      text-align: center;
   }
`

export const LinkAnchor = styled(Link)`
   font-size: 0.8rem;
   color: ${colors['color-font-muted']};
   cursor: pointer;
   margin-bottom: 1rem;

   &:hover {
      text-decoration: underline;
   }

   @media (max-width: ${breakpoints.sm}) {
      text-align: center;
   }
`

export const Anchor = styled.a`
   font-size: 0.8rem;
   color: ${colors['color-font-muted']};
   cursor: pointer;
   margin-bottom: 1rem;

   &:hover {
      text-decoration: underline;
   }

   @media (max-width: ${breakpoints.sm}) {
      text-align: center;
   }
`
