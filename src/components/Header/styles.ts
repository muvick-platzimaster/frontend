import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints, colors } from '../../styles/theme'
import { Logo as LogoMuvick } from '../Icons'

export const LinkButton = styled(Link)`
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

   background-image: url('https://www.casadelaweb.com/wp-content/uploads/2018/10/admission-2974645_1920.jpg');
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;

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
   width: 108px;
   height: 32px;

   @media (min-width: ${breakpoints.xl}) {
      width: 167px;
      height: 45px;
   }
`

export const Grid = styled.div`
   display: flex;
   position: relative;
   justify-content: space-between;
   align-items: center;
   z-index: 10;
`

export const Content = styled.div`
   position: relative;
   padding: calc(10rem - 56.5px) 0 10rem 0;
   z-index: 10;
   text-align: center;

   @media (max-width: ${breakpoints.md}) {
      padding: calc(7rem - 56.5px) 0 7rem 0;
   }

   @media (max-width: ${breakpoints.sm}) {
      padding: 5rem 0;
   }
`
