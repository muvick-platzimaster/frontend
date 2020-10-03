import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { radius, colors, breakpoints } from '../../styles/theme'

export const Container = styled.section`
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   grid-gap: 20px 5px;
   justify-content: space-around;
   margin-top: 10px;
   @media (max-width: ${breakpoints.xl}) {
      grid-template-columns: repeat(5, 1fr);
   }
   @media (max-width: ${breakpoints.lg}) {
      grid-template-columns: repeat(4, 1fr);
   }
   @media (max-width: ${breakpoints.md}) {
      grid-template-columns: repeat(2, 1fr);
   }
`

export const Item = styled.div`
   background: #141414;
   width: auto;
   transition: 0.3s cubic-bezier(1, 0.89, 0.21, 0.98);
   z-index: 5;
   height: calc(100% - 50px);
   &:hover {
      transform: scale(1.2);
      z-index: 6;
      & .icons {
         transform: scale(1);
         z-index: 6;
         height: 50px;
      }
   }
   & h2 {
      position: relative;
      top: -40px;
      left: 10px;
      margin: 0;
      height: 0;
   }
   & .icons {
      background: #141414;
      transform: scale(0);
      position: relative;
      top: -4px;
      transition: 0.5s;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      & .icons--play {
         width: 60%;
         box-sizing: border-box;
         display: flex;
         justify-content: space-around;
         align-items: center;
         height: 50px;
      }
      & .icons--more {
         width: 40%;
         display: flex;
         justify-content: flex-end;
         padding-right: 20px;
         box-sizing: border-box;
         align-items: center;
         height: 50px;
      }
      & svg {
         width: 100%;
         height: 100%;
         cursor: pointer;
         color: white;
      }
   }
`

export const Image = styled.img`
   width: 100%;
   height: 100%;
   border-radius: ${radius.standard};
`

export const Button = styled.button`
   display: inline-block;
   justify-content: center;
   align-items: center;
   width: 40px;
   height: 40px;
   background: ${colors['color-primary']};
   border: none;
   color: white;
   margin-right: 20px;
   box-sizing: border-box;
   border-radius: ${radius.circle};
   &:hover {
      background: #6c6e6d;
   }
`

export const LinkButton = styled(Link)`
   display: inline-block;
   justify-content: center;
   align-items: center;
   width: 40px;
   height: 40px;
   background: ${colors['color-primary']};
   border: none;
   color: white;
   margin-left: 20px;
   box-sizing: border-box;
   border-radius: ${radius.circle};
   &:hover {
      background: #6c6e6d;
   }
`
