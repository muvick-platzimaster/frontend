import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Container = styled.div`
   background-color: ${colors['color-body-base']};
   margin-bottom: 1rem;
`

export const Item = styled.li`
   padding-left: 0;
   list-style: none;
   width: 100%;
   border-top: 3px solid ${colors['color-body-dark']};
   border-bottom: 3px solid ${colors['color-body-dark']};
`
export const Button = styled.button`
   cursor: pointer;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   color: ${colors['color-font-base']};
   border: none;
   padding: 0 2rem;
   background-color: ${colors['color-body-base']};
`

export const Text = styled.p``

export const IconContainer = styled.span`
   /* transform: rotate(180deg); */
`

export const Body = styled.div`
   padding: 1rem 2rem;
`
