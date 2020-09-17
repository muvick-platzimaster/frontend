import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/theme'

export const HomeStyled = styled.div`
   background-color: ${colors['color-body-dark']};
   color: ${colors['color-font-base']};

   .background {
      position: absolute;
      background-image: url('https://www.casadelaweb.com/wp-content/uploads/2018/10/admission-2974645_1920.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
   }

   .background::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${colors['color-primary']};
      opacity: 0.1;
   }
`

export const HomeContent = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   color: ${colors['color-font-base']};
   min-height: calc(100vh - 103px);
   justify-content: center;
   margin-top: -103px;
   text-align: center;
   font-weight: bold;
   margin-bottom: 103px;

   & > span {
      display: block;
      margin: 2rem 0;
      font-size: 24px;
      color: ${colors['color-font-base']};
   }

   @media (max-width: ${breakpoints.xs}) {
      & > span {
         font-size: 18px;
      }
   }
`
