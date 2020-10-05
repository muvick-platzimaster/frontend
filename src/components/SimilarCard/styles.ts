import styled from 'styled-components/macro'
import { breakpoints, radius } from '../../styles/theme'
import { Link } from 'react-router-dom'

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

export const Image = styled(Link)`
   background-image: ${({ theme }) =>
      `url('https://image.tmdb.org/t/p/original${theme.background}')`};
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   height: 130px;
   border-radius: ${radius.standard} ${radius.standard} 0 0;
   display: flex;
   justify-content: center;
   align-items: center;
   & p {
      display: none;
   }
   &:hover svg {
      display: block;
      transition: 0.3s;
      background-color: rgba(30, 30, 20, 0.5);
      border-radius: ${radius.circle};
      width: 3em;
      height: 3em;
   }
`
