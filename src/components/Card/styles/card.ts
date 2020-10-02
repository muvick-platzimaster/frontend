import styled from 'styled-components/macro'
import { breakpoints, colors, transitions } from '../../../styles/theme'

export const Container = styled.section`
   margin: 2rem 1rem;
` /* Group */

export const Title = styled.h3`
   margin-bottom: -0.5rem;
   position: relative;
   font-size: 1.8rem;
   z-index: 2;
`

export const RowContainer = styled.div`
   position: relative;
   margin-bottom: 3rem;
   min-height: 200px;
`

export const Details = styled.div`
   opacity: 0;
   position: absolute;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   background: rgb(0, 0, 0);
   background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 25%,
      rgba(0, 0, 0, 0) 100%
   );
   padding: 1rem;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   transition: opacity ${transitions.normal};
`

export const Item = styled.div`
   min-width: calc(100% / 8);
   transition: transform ${transitions.normal}, opacity ${transitions.normal},
      filter ${transitions.normal}, margin ${transitions.normal};
   cursor: pointer;
   border: 1px solid ${colors['color-body-dark']};
   position: relative;
   transform-origin: center;

   &:hover {
      filter: blur(0) !important;
      opacity: 1 !important;
      transform: scale(1.2);
      margin: 0 1%;
      z-index: 2;
   }

   &:hover ${Details} {
      opacity: 1;
   }

   @media (max-width: ${breakpoints.lg}) {
      min-width: calc(100% / 5);

      &:hover {
         transform: scale(1.1);
      }
   }

   @media (max-width: ${breakpoints.md}) {
      min-width: calc(100% / 3);
   }

   @media (max-width: ${breakpoints.sm}) {
      min-width: calc(100% / 2);
   }
`

export const Entities = styled.div`
   overflow-x: scroll;
   cursor: grab;
   width: 100%;
   display: flex;
   flex-wrap: nowrap;
   padding: 2rem 0;
   scroll-behavior: smooth;
   transition: all ease 200ms;

   &:hover ${Item} {
      opacity: 0.5;
      filter: blur(1px);
   }

   &::-webkit-scrollbar {
      display: none;
   }
`

export const Subtitle = styled.p`
   font-weight: bold;
   margin: 0.5rem 0;
`

export const Description = styled.p`
   margin: 0;
   font-size: 0.8rem;
   display: -webkit-box;
   -webkit-line-clamp: 6;
   -webkit-box-orient: vertical;
   overflow: hidden;
   color: ${colors['color-font-muted']};

   @media (max-width: ${breakpoints.lg}) {
      font-size: 0.6rem;
   }
`

export const Badge = styled.span`
   color: ${({ theme }) => {
      if (theme.rating >= 9) return colors['color-success']
      if (theme.rating > 6 && theme.rating < 9) return colors['color-primary']
      if (theme.rating <= 6 && theme.rating > 5) return colors['color-warning']
      if (theme.rating <= 5) return colors['color-error']
   }};
   font-weight: bolder;
   margin-left: 0.25rem;
`

export const Image = styled.img`
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
`

export const ToPage = styled.a`
   position: absolute;
   display: flex;
   color: ${colors['color-font-base']};
   text-decoration: none;
   top: 0;
   bottom: 0;
   font-size: 2rem;
   padding: 0 1rem;
   justify-content: center;
   align-items: center;
   width: 40px;
   z-index: 1;
   transition: background ${transitions.normal};

   &:first-of-type {
      left: 0;
      background: rgb(0, 0, 0);
      background: linear-gradient(
         90deg,
         rgba(0, 0, 0, 1) 0%,
         rgba(0, 0, 0, 0.1) 100%
      );

      &:hover {
         background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.8) 100%
         );
      }
   }
   &:last-of-type {
      right: 0;
      background: rgb(0, 0, 0);
      background: linear-gradient(
         -90deg,
         rgba(0, 0, 0, 1) 0%,
         rgba(0, 0, 0, 0.1) 100%
      );

      &:hover {
         background: linear-gradient(
            -90deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.8) 100%
         );
      }
   }
`

export const Page = styled.div`
   position: relative;
`

export const ImageContainer = styled.figure`
   padding-bottom: 133.33%;
   position: relative;
   width: 100%;
   margin: 0;
   height: 0;
`

export const Pane = styled.div``

/*
 * Fetaure
 * Feature Title
 * Feature Close - buttom
 * Maturity
 * Content
 */
