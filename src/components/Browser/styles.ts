import styled from 'styled-components/macro'
import { breakpoints, colors, transitions } from '../../styles/theme'
import { Link } from 'react-router-dom'

export const Container = styled.div`
   padding: 2rem 0;
`

export const LinkButton = styled(Link)`
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
   margin-bottom: 15px;
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
   margin-bottom: 15px;
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
   display: inline-block;
   width: 30%;
   font-size: 2em;
   margin-bottom: 20px;
   @media (max-width: ${breakpoints.xl}) {
      font-size: 1.5em;
   }
   @media (max-width: ${breakpoints.sm}) {
      font-size: 1.2em;
      width: 100%;
      text-align: justify;
   }
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
   font-size: ${(props) => props.fontSize};
   margin-bottom: 3rem;
   line-height: 3.5rem;
   width: 50%;
   @media (max-width: ${breakpoints.sm}) {
      font-size: 3rem;
      line-height: 3rem;
      width: 100%;
      text-align: center;
   }

   @media (max-width: ${breakpoints.xs}) {
      font-size: 1.75rem;
      line-height: 1.75rem;
   }
`
