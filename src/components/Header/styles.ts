import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints, colors } from '../../styles/theme'
import { Logo as LogoMuvick } from '../Icons'

/* export const HeaderStyled = styled.header`
   background-color: transparent;
   position: relative;
   padding: 1rem 0.5rem;
   z-index: 10;
   display: flex;
   justify-content: space-between;

   ul {
      margin: 0;
      list-style: none;
      padding-left: 0;
      display: flex;
      align-items: center;
   }

   ul li {
      padding-left: 1rem;
   }

   button {
      background-color: transparent;
      cursor: pointer;
      border: none;
      margin-left: 1rem;
   }
` */

export const LoginButton = styled(Link)`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   background-color: ${colors['color-primary']};
   color: ${colors['color-font-base']};
   font-size: 20px;
   padding: 0.5rem 1rem;
   border-radius: 5px;
   white-space: nowrap;
`

export const Container = styled.header`
   position: relative;
   padding: 2rem 0;
   z-index: 10;
`

export const IconContainer = styled(Link)``

export const Logo = styled(LogoMuvick)`
   width: 108px;
   height: 32px;

   @media (min-width: ${breakpoints.xl}) {
      width: 167px;
      height: 45px;
   }
`

export const Grid = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
