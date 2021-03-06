import styled from 'styled-components/macro'
import { breakpoints, colors, transitions, radius } from '../../styles/theme'
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
   border-radius: ${radius.standard};
   background: ${colors['color-font-base']};
   color: ${colors['color-gray-dark']};
   line-height: 2.4rem;
   font-size: 1.2rem;
   font-weight: bold;
   transition: all ${transitions.normal};
   margin-right: 15px;
   margin-bottom: 15px;
   &:focus {
      filter: brightness(1.2);
   }

   &:hover {
      background: ${({ theme }) => theme.color};
      color: ${colors['color-font-base']};
   }

   &:disabled {
      background-color: ${colors['color-primary-muted']};
      cursor: default;
      opacity: 0.8;
   }

   @media (max-width: ${breakpoints.sm}) {
      margin-right: 0;
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
   border-radius: ${radius.standard};
   background: ${({ theme }) => theme.color};
   color: ${colors['color-font-base']};
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
      background: ${colors['color-body-base']};
   }

   &:disabled {
      background-color: ${colors['color-primary-muted']};
      cursor: default;
      opacity: 0.8;
   }

   @media (max-width: ${breakpoints.sm}) {
      margin-right: 0;
   }
`

export const Text = styled.span`
   display: -webkit-box;
   -webkit-line-clamp: 4;
   -webkit-box-orient: vertical;
   overflow: hidden;
   font-size: 2rem;
   margin-bottom: 20px;
   text-align: left;

   @media (max-width: ${breakpoints.xl}) {
      font-size: 1.5rem;
   }
   @media (max-width: ${breakpoints.sm}) {
      font-size: 1.2rem;
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
   font-size: 5rem;
   margin: 1rem 0;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;

   @media (max-width: ${breakpoints.md}) {
      text-align: center;
      font-size: 3rem;
   }

   @media (max-width: ${breakpoints.xs}) {
      font-size: 2rem;
   }
`
