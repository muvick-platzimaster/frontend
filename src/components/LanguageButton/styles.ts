import styled from 'styled-components'

import { colors, transitions } from '../../styles/theme'

export const Button = styled.button`
   padding: 5px 10px;
   border: none;
   background: ${colors['color-primary']};
   color: white;
   box-sizing: border-box;
   width: 40px;
   height: 40px;
   margin-left: 5px;
   cursor: pointer;
   transition: background ${transitions.normal};

   &:hover {
      background: ${colors['color-gray-dark']};
   }
`
