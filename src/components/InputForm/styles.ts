import styled from 'styled-components/macro'
import { breakpoints, colors } from '../../styles/theme'

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   @media (max-width: ${breakpoints.sm}) {
      flex-direction: column;
      width: 100%;
   }
`

export const Input = styled.input`
   width: 100%;
   height: 55px;
   padding-left: 20px;
   font-size: 20px;
   border: none;

   @media (max-width: ${breakpoints.sm}) {
      width: 100%;
      margin-bottom: 1rem;
   }
`

export const Button = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   text-transform: uppercase;
   height: 55px;
   padding: 0 1rem;
   width: max-content;
   cursor: pointer;
   border: none;
   background: ${colors['color-primary']};
   color: ${colors['color-font-base']};
   font-size: 1rem;
   &:focus {
      filter: brightness(1.2);
   }
`

export const Text = styled.span`
   white-space: nowrap;
   margin-right: 0.25rem;
`
