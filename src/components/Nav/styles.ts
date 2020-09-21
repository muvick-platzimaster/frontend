import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints, colors } from '../../styles/theme'
import { Logo as LogoMuvick } from '../Icons'

export const LinkButton = styled(Link)`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   color: #d6d3d0;
   font-size: 14px;
   padding: 0.5rem 1rem;
   border-radius: 5px;
   white-space: nowrap;
   &:hover {
      color: #bbb8b5;
      transition: 0.3s;
   }
`

export const Container = styled.header`
   position: relative;
   padding: 1rem 0;
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   min-height: 100vh;

   &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${colors['color-primary']};
      opacity: 0.2;
   }
`

export const Logo = styled(LogoMuvick)`
   width: 95px;
   height: 25px;

   @media (min-width: ${breakpoints.xl}) {
      width: 95px;
      height: 25px;
   }
`

export const Grid = styled.div`
   display: flex;
   position: relative;
   justify-content: flex-start;
   align-items: center;
   z-index: 10;
   & .Nav__Icons {
      position: absolute;
      right: 4%;
   }
`

export const Content = styled.div`
   position: relative;
   padding: calc(20rem - 56.5px) 0 10rem 0;
   z-index: 10;
   text-align: left;

   @media (max-width: ${breakpoints.md}) {
      padding: calc(7rem - 56.5px) 0 7rem 0;
   }

   @media (max-width: ${breakpoints.sm}) {
      padding: 5rem 0;
   }
`
