import styled from 'styled-components/macro'
import { breakpoints, colors, transitions } from '../../styles/theme'

export const Container = styled.div`
   padding: 2rem 0;
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
   transition: all ${transitions.normal};
   &:focus {
      filter: brightness(1.2);
   }

   &:disabled {
      background-color: ${colors['color-primary-muted']};
      cursor: default;
      opacity: 0.8;
   }
`

export const Text = styled.span`
   white-space: nowrap;
   margin-right: 0.25rem;
`

export const Label = styled.h2`
   text-align: center;
   font-size: 1.3rem;
   margin: 2rem 0;

   @media (max-width: ${breakpoints.sm}) {
      font-size: 1rem;
      margin: 1rem 0;
   }
`

export const Frame = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   @media (max-width: ${breakpoints.sm}) {
      flex-direction: column;
      width: 100%;
   }
`
