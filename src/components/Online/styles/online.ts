import styled from 'styled-components'
import { colors } from '../../../styles/theme'

export const Offline = styled.div`
   background-color: ${colors['color-error']}88;
   border: 0.5px solid ${colors['color-error']};
   padding: 0.5rem;
   text-align: center;
   text-transform: uppercase;
   font-size: 0.5rem;
   color: ${colors['color-font-base']};
   position: fixed;
   top: 0;
   left: 0;
   z-index: 20;
`
