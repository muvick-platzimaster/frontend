import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const HeaderStyled = styled.header`
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
`

export const LoginButton = styled.span`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   background: ${colors['color-primary']};
   color: ${colors['color-font-base']};
   width: 176px;
   height: 54px;
   font-size: 20px;
   border-radius: 10px;
`
