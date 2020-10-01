import styled from 'styled-components/macro'
import { breakpoints, colors, transitions, radius } from '../../styles/theme'
import { Link } from 'react-router-dom'

export const Container = styled.div`
   padding: 2rem 0;
`

export const Button = styled(Link)`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 55px;
   padding: 0 2rem;
   width: max-content;
   cursor: pointer;
   border: none;
   border-radius: ${radius.standard};
   background: white;
   color: black;
   font-weight: 700;
   line-height: 2.4rem;
   font-size: 1.3rem;
   transition: all ${transitions.normal};
   margin: 15px auto;

   &:focus {
      filter: brightness(1.2);
   }

   &:hover {
      background: ${colors['color-gray-dark']};
   }

   &:disabled {
      background-color: ${colors['color-primary-muted']};
      cursor: default;
      opacity: 0.8;
   }
`

export const Text = styled.span`
   display: block;
   width: 50%;
   font-size: 2em;
   margin-bottom: 20px;
   text-align: center;
   margin: 10px auto;
   @media (max-width: ${breakpoints.xl}) {
      font-size: 1.5em;
   }
   @media (max-width: ${breakpoints.sm}) {
      font-size: 1.2em;
      width: 100%;
      text-align: justify;
   }
`

export const Error = styled.div`
   width: fit-content;
   text-align: center;
   margin: 10px auto;
   border-color: red;
   border-width: 2px;
   border-style: none none none solid;
   & span {
      font-size: 2em;
      margin-left: 10px;
   }
   & .code404 {
      font-weight: 800;
      font-size: 2.2em;
   }
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
   width: 100%;
   text-align: center;
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
