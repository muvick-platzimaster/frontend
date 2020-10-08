import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/theme'

export const Container = styled.section`
   padding: 2rem 0;
   color: ${colors['color-font-muted']};
`

export const Grid = styled.div``

export const Column = styled.div`
   display: flex;
   flex-direction: column;
   /* width: calc(100% / 3); */
`

export const Row = styled.div`
   display: grid;
   justify-content: space-between;
   flex-wrap: wrap;
   grid-template-columns: 3fr 1fr 1fr;
   width: 100%;
`

export const Title = styled.p`
   margin-bottom: 1em;
`

export const Text = styled.p`
   font-size: 0.8rem;
   padding: 0 10em 0 0;
`

export const LinkAnchor = styled(Link)`
   font-size: 0.8rem;
   color: ${colors['color-font-muted']};
   cursor: pointer;
   margin-bottom: 1rem;
   margin-right: 1rem;
   &:hover {
      text-decoration: underline;
   }
`

export const Anchor = styled.a`
   font-size: 0.8rem;
   color: ${colors['color-font-muted']};
   cursor: pointer;
   margin-bottom: 1rem;
   margin-right: 1rem;
   &:hover {
      text-decoration: underline;
   }
`
