import styled from 'styled-components/macro'
import { colors } from '../../styles/theme'

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
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`

export const Title = styled.p`
   margin-bottom: 3rem;
`

export const Text = styled.p`
   font-size: 0.8rem;
   margin-top: 1rem;
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
