import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints, colors, transitions, radius } from '../../styles/theme'
import { Logo as LogoMuvick } from '../Icons'

export const LinkButton = styled(Link)`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   color: #efefef;
   font-size: 14px;
   padding: 0.5rem 1rem;
   border-radius: ${radius.standard};
   white-space: nowrap;
   &:hover {
      color: #bbb8b5;
      transition: 0.3s;
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

   & .Nav__Icons {
      position: absolute;
      right: 4%;
      display: flex;
   }
   & .Nav__Menu--open {
      margin-left: 1rem;
      @media (max-width: ${breakpoints.md}) {
         display: none;
      }
   }
   & .Nav__Menu--dropdown {
      display: none;
      position: relative;

      &:hover .dropdownContent {
         display: block;
      }
      & .dropdownContent {
         display: block;
         position: absolute;
         background-color: rgba(8, 9, 8, 0.85);
         min-width: 200px;
         box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
         z-index: 10;
         text-align: center;
         left: -55px;
         & a,
         button {
            width: 100%;
            color: white;
            padding: 12px 16px;
            text-decoration: none;
            display: inline-block;
            &:hover {
               background-color: ${colors['color-gray-dark']};
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
   padding: calc(15rem - 56.5px) 0;
   text-align: left;
   z-index: 5;
   width: ${({ theme }) => (theme.notFound ? '100%' : '60%')};

   @media (max-width: ${breakpoints.md}) {
      width: 100%;
      padding: calc(7rem - 56.5px) 0;
   }

   @media (max-width: ${breakpoints.sm}) {
      padding: 4rem 0;
   }
`

export const Container = styled.header`
   position: relative;
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center top;
   padding: 1.5rem 0;
   background-image: ${({ theme }) => {
      return theme.background
         ? `url('http://image.tmdb.org/t/p/original${theme.background}')`
         : 'url("")'
   }};

   &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${colors['color-primary']};
      opacity: 0.7;
   }

   &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
         180deg,
         rgba(0, 0, 0, 0.8) 0,
         rgba(158, 158, 168, 0) 20rem
      );
   }
`

export const Button = styled.button`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   color: #efefef;
   font-size: 14px;
   padding: 0.5rem 1rem;
   border-radius: ${radius.standard};
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

export const SwitchButton = styled.button`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   background: ${colors['color-primary']};
   width: 100px;
   height: 40px;
   color: ${colors['color-font-base']};
   font-size: 14px;
   padding: 0.5rem 1rem;
   margin-right: 0.5rem;
   margin-bottom: 1rem;
   border-radius: ${radius.standard};
   white-space: nowrap;
   border: 1px solid transparent;
   cursor: pointer;
   transition: background ${transitions.normal},
      border-color ${transitions.normal};

   &:hover {
      background: ${colors['color-gray-dark']};
   }
   &.active {
      background: ${colors['color-gray-dark']};
      border-color: ${colors['color-font-base']};
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

   @media (max-width: ${breakpoints.xs}) {
      background: ${colors['color-body-base']}ee;
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

export const Text = styled.p`
   margin: 1rem 0 0.5rem 0;
`
