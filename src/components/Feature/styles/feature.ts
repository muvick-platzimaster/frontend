import styled from 'styled-components/macro'
import { colors } from '../../../styles/theme'

export const Container = styled.section`
   padding: 1rem;
   position: relative;
   background: url('${({ theme }) => theme.src}');
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   height: 360px;
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
export const Title = styled.h2``

export const Subtitle = styled.p`
   color: ${colors['color-font-muted']};
`

export const Grid = styled.div`
   position: relative;
   z-index: 10;
`
