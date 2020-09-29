import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { colors, transitions } from '../../../styles/theme'

export const Container = styled.section`
   position: relative;
`

export const RowContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
   grid-column-gap: 6px;
   grid-row-gap: 6px;
   margin-top: 2rem;
`

export const Item = styled.div`
   height: 425px;
   position: relative;
`

export const Description = styled.p`
   color: ${colors['color-font-muted']};
   display: -webkit-box;
   -webkit-line-clamp: 7;
   -webkit-box-orient: vertical;
   overflow: hidden;
`

export const Title = styled.h4`
   font-weight: bold;
   font-size: 1.7rem;
   margin: 0;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
`

export const Content = styled.div`
   padding: 1rem;
   z-index: 10;
   opacity: 0;
   position: absolute;
   top: 0;
   width: 100%;
   height: 100%;
   bottom: 0;
   right: 0;
   left: 0;
   transition: opacity ${transitions.normal};
   background: rgb(0, 0, 0);
   background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 25%,
      rgba(0, 0, 0, 0) 100%
   );

   display: flex;
   flex-direction: column;
   justify-content: flex-end;

   &:hover {
      opacity: 1;
   }
`

export const Image = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   background: ${({ theme }) =>
      `url('http://image.tmdb.org/t/p/w300${theme.background}')`};
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center top;
`
export const Close = styled.button`
   width: 2rem;
   height: 2rem;
   border: 1px solid white;
   border-radius: 50%;
   background: none;
   cursor: pointer;
   position: absolute;
   top: 0;
   right: 0;
`

export const PlayButton = styled(Link)`
   display: inline-block;
   margin: 0 auto;
   height: 40px;
   cursor: pointer;
   background-color: ${colors['color-primary']};
   color: ${colors['color-font-base']};
   font-size: 1rem;
   border: none;
   border-radius: 0.2rem;
   padding: 0.7rem 3rem;
   text-transform: uppercase;
   margin-top: 1rem;
`
