import styled from 'styled-components'

import { radius } from '../../styles/theme'

export const Container = styled.section`
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   grid-gap: 80px 5px;
   justify-content: space-around;
   margin-top: 10px;
`

export const Item = styled.div`
   background: #141414;
   width: auto;
   transition: 0.3s cubic-bezier(1, 0.89, 0.21, 0.98);
   z-index: 5;
   height: 170px;
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
      top: -55px;
      left: 10px;
   }
   & .icons {
      background: #141414;
      transform: scale(0);
      position: relative;
      top: -70px;
      transition: 0.5s;
      display: flex;
      & .icons--play {
         width: 60%;
      }
      & .icons--more {
         width: 40%;
         display: flex;
         justify-content: flex-end;
         padding-right: 20px;
      }
      & svg {
         width: 50px;
         height: 50px;
         cursor: pointer;
         margin-left: 20px;
      }
   }
`

export const Image = styled.img`
   width: 100%;
   height: 100%;
   border-radius: ${radius.standard};
`
