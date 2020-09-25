import styled from 'styled-components/macro'
import { colors } from '../../../styles/theme'

export const Container = styled.section`
   padding: 1rem;
   position: relative;
   background: url('${({ theme }) => theme.src}');
   background-repeat: no-repeat;
   background-position: top center;
   background-size: cover;
   height: 420px;
   top: -1.5rem;
   z-index: 1;
   &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: linear-gradient(
         90deg,
         rgba(0, 0, 0, 1) 0%,
         rgba(0, 0, 0, 0.6) 100%
      );
   }
`
export const Title = styled.h2`
   display: flex;
   align-items: center;
   justify-content: start;
`

export const Subtitle = styled.p`
   color: ${colors['color-font-muted']};
`

export const Grid = styled.div`
   position: relative;
   display: flex;
   justify-content: space-between;
   z-index: 10;
`

export const Pane = styled.div`
   width: 90%;
`

export const Badge = styled.span`
   font-size: 0.7rem;
   background: ${({ theme }) => {
      if (theme.rating >= 9) return colors['color-success']
      if (theme.rating > 6 && theme.rating < 9) return colors['color-primary']
      if (theme.rating <= 6 && theme.rating > 5) return colors['color-warning']
      if (theme.rating <= 5) return colors['color-error']
   }};
   padding: 0.5rem;
   margin-left: 0.5rem;
   border-radius: 0.3rem;
`
export const CloseContainer = styled.button`
   position: absolute;
   top: -5px;
   right: -20px;
   width: 2.5rem;
   height: 2.5rem;
   border-radius: 50%;
   background: none;
   border: 1px solid ${colors['color-font-base']};
   cursor: pointer;

   svg {
      width: 100%;
      height: 100%;
   }
`
