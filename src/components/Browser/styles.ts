import styled from 'styled-components/macro'
import { breakpoints, colors, transitions } from '../../styles/theme'

export const Container = styled.div`
   padding: 2rem 0;
`

export const Button = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   text-transform: uppercase;
   height: 55px;
   padding: 0 2rem;
   width: max-content;
   cursor: pointer;
   border: none;
   border-radius: 5px;
   background: ${(props) => props.background && props.background};
   color: ${(props) => (props.background === 'white' ? 'black' : 'white')};
   font-weight: 700;
   line-height: 2.4rem;
   font-size: 1.2rem;
   transition: all ${transitions.normal};
   margin-right: 15px;
   &:focus {
      filter: brightness(1.2);
   }

   &:hover {
      background: #d6d3d0;
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

export const Frame = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;

   @media (max-width: ${breakpoints.sm}) {
      flex-direction: column;
      width: 100%;
   }
`

export const TitleStyled = styled.h1`
   font-size: 8rem;
   margin-bottom: 3rem;
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
