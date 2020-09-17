import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/theme'

export const Container = styled.div`
   position: relative;
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

export const HomeContent = styled.div`
   padding: calc(15rem - 113px) 0 15rem 0;
   text-align: center;
   position: relative;
   z-index: 10;

   @media (max-width: ${breakpoints.md}) {
      padding: calc(10rem - 113px) 0 10rem 0;
   }

   @media (max-width: ${breakpoints.sm}) {
      padding: calc(5rem - 113px) 0 5rem 0;
   }
`
export const Subtitle = styled.h2`
   margin: 2rem 0;

   @media (max-width: ${breakpoints.sm}) {
      font-size: 1rem;
      margin: 1rem 0;
   }
`
