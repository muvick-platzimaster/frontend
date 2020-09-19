import styled from 'styled-components'

export const Container = styled.main`
   position: relative;
   display: flex;
   flex-direction: row;
   width: 100%;
   overflow: scroll;
   padding-left: 50px;
   -ms-overflow-style: none; /* IE and Edge */
   scrollbar-width: none; /* Firefox */
   &::-webkit-scrollbar {
      /* Chrome */
      display: none;
   }
`
