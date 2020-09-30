import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints, colors, transitions } from '../../styles/theme'
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
   background-image: ${(props) => {
      return props.background
         ? `url('http://image.tmdb.org/t/p/original${props.background}')`
         : 'url("")'
   }};
   height: 80vh;
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
   @media (max-width: ${breakpoints.sm}) {
      height: 40%;
   }
`

export const Logo = styled(LogoMuvick)`
   width: 95px;
   height: 25px;
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
      rgba(0, 0, 0, 0.5) 0%,
      rgba(158, 158, 168, 0) 100%
   );
   & .Nav__Icons {
      position: absolute;
      right: 4%;
      display: flex;
   }
   & .Nav__Menu--open {
      @media (max-width: ${breakpoints.md}) {
         display: none;
      }
   }
   & .Nav__Menu--dropdown {
      display: none;
      &:hover .dropdownContent {
         display: block;
      }
      & .dropdownContent {
         display: none;
         position: absolute;
         background-color: rgba(8, 9, 8, 0.85);
         min-width: 200px;
         box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
         z-index: 3000;
         text-align: center;
         left: -55px;
         & a {
            color: white;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            &:hover {
               background-color: rgba(100, 99, 99, 0.85);
            }
         }
      }
      @media (max-width: ${breakpoints.md}) {
         position: relative;
         display: inline-block;
         & .menu {
         }
      }
   }
`

export const Content = styled.div`
   position: relative;
   padding: calc(15rem - 56.5px) 0 10rem 60px;
   text-align: left;

   @media (max-width: ${breakpoints.md}) {
      padding: calc(7rem - 56.5px) 0 7rem 0;
   }

   @media (max-width: ${breakpoints.sm}) {
      padding: 5rem 0;
   }
`

export const Button = styled.button`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   color: #efefef;
   font-size: 14px;
   padding: 0.5rem 1rem;
   border-radius: 5px;
   white-space: nowrap;
   background: transparent;
   border: none;
   cursor: pointer;

   &:hover {
      color: #bbb8b5;
      transition: 0.3s;
   }

   & svg {
      margin-left: 0.5rem;
   }
`

export const Label = styled.button`
   position: absolute;
   outline: none;
   border: 0;
   right: 0;
   width: 2.5rem;
   height: 2.5rem;
   background-color: ${colors['color-primary']};
   cursor: pointer;

   &:disabled {
      background-color: ${colors['color-primary-muted']};
      cursor: default;
   }
`

export const SearchContainer = styled.div`
   position: relative;
   width: 100%;
   height: 2.5rem;
   max-width: 2.5rem;
   overflow: hidden;
   transition: all ${transitions.normal};

   &:focus-within {
      max-width: 300px;
   }

   &:hover {
      max-width: 300px;
   }
`

export const Search = styled.input`
   width: 100%;
   padding: 0.5rem 1rem;
   height: 100%;
   border: none;
   background-color: #00000033;
   color: ${colors['color-font-base']};

   &::placeholder {
      color: ${colors['color-font-muted']};
   }
`
