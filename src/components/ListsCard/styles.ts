import styled from 'styled-components'

import { radius } from '../../styles/theme'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 300px;
   height: 180px;
   margin-top: 10px;
   margin-right: 5px;
   margin-bottom: 10px;
`

export const Image = styled.img`
   width: 300px;
   border-radius: ${radius.standard};
`
