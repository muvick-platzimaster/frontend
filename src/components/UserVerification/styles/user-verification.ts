import styled from 'styled-components'
import { radius, colors } from '../../../styles/theme'

export const Container = styled.section``

export const Grid = styled.div`
   padding: 1rem 0;
`

export const Title = styled.h3`
   margin: 0;
   font-size: 2rem;
`

export const Text = styled.p``

export const Pane = styled.div`
   display: flex;
   align-items: center;
`
export const Button = styled.button`
   border-radius: ${radius.standard};
   border: none;
   padding: 0.5rem 1rem;
   background-color: ${({ theme }) => theme.color};
   color: ${colors['color-font-base']};
   cursor: pointer;
   margin-right: 0.5rem;

   &:disabled {
      background-color: ${colors['color-primary-muted']};
   }
`

export const IconContainer = styled.div`
   width: 3rem;
   height: 3rem;
   margin-right: 0.5rem;
`

export const Error = styled.div`
   width: 100%;
   padding: 0.5rem 1rem;
   background-color: ${colors['color-error']};
   margin-bottom: 1rem;
   border-radius: ${radius.standard};

   ${Text} {
      font-size: 1rem;
      text-align: left;
   }
`

export const Input = styled.input`
   padding: 0.5rem 1rem;
   display: block;
   width: 100%;
   margin-bottom: 1rem;

   &:invalid:focus {
      border-color: ${colors['color-error']}aa;
   }
   &:valid:focus {
      border-color: ${colors['color-success']}aa;
   }
`
