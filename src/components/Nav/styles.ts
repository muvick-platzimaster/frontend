import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints, colors } from '../../styles/theme'
import { Logo as LogoMuvick } from '../Icons'

export const LinkButton = styled(Link)`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   color: #efefef;
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
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   background-image: url('http://image.tmdb.org/t/p/original/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg');
   &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${colors['color-primary']};
      opacity: 0.5;
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
   padding-left: 60px;
   padding-top: 20px;
   background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5102415966386555) 0%,
      rgba(158, 158, 168, 0) 100%
   );
   & .Nav__Icons {
      position: absolute;
      right: 4%;
   }
`

export const Content = styled.div`
   position: relative;
   padding: calc(20rem - 56.5px) 0 10rem 60px;
   z-index: 10;
   text-align: left;

   @media (max-width: ${breakpoints.md}) {
      padding: calc(7rem - 56.5px) 0 7rem 0;
   }

   @media (max-width: ${breakpoints.sm}) {
      padding: 5rem 0;
   }
`
