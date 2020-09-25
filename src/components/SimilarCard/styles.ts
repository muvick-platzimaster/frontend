import styled from 'styled-components/macro'
import { breakpoints } from '../../styles/theme'

export const Container = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.6);
   z-index: 100;
`

export const Section = styled.section`
   display: flex;
   flex-direction: column;
   background: #2f2f2f;
`

export const Title = styled.h2`
   margin-top: 20px;
`

export const Text = styled.p`
   position: relative;
   width: 100%;
`

export const Tag = styled.span`
   position: relative;
   margin-right: 10px;
   margin-top: 10px;
   display: inline-block;
   color: ${(props) => props.color};
`

export const Detail = styled.div`
   position: relative;
   width: 100%;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 10px;
   @media (max-width: ${breakpoints.md}) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media (max-width: ${breakpoints.xs}) {
      grid-template-columns: 1fr;
   }
`

export const Image = styled.div`
   background-image: ${({ theme }) =>
      `url('http://image.tmdb.org/t/p/original${theme.background}')`};
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   height: 130px;
   /* width: 240px; */
   border-radius: 10px 10px 0 0;
`
