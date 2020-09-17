import styled from 'styled-components'
import { colors } from '../../styles/theme'

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
