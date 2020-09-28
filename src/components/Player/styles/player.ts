import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { colors } from '../../../styles/theme'

export const Container = styled.div`
   width: 100%;
   height: 99vh;
   position: relative;
`

export const Video = styled(ReactPlayer)`
   padding: 0;
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   width: 100%;
   height: 100%;
   cursor: pointer;
`

export const IconContainer = styled.button`
   position: relative;
   width: 5rem;
   height: 3rem;
   top: 4rem;
   left: 1rem;
   z-index: 10;
   cursor: pointer;
   background-color: transparent;
   border: 1px solid transparent};
   &:hover {
      border-color: ${colors['color-font-muted']};
   }
`
