import styled from 'styled-components/macro'
import { breakpoints, colors, transitions } from '../../../styles/theme'

export const Container = styled.section`
   margin: 2rem 1rem;
` /* Group */

export const Title = styled.h3`
   margin-bottom: -0.5rem;
   position: relative;
   z-index: 2;
`

export const RowContainer = styled.div`
   position: relative;
   margin-bottom: 3rem;
`

export const Item = styled.div`
   min-width: calc(100% / 6);
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
      margin: 0 2%;
      z-index: 2;
   }

   &:first-of-type {
      transform-origin: center left;
   }

   &:first-of-type:hover {
      margin: 0;
      margin-right: 4%;
   }

   @media (max-width: ${breakpoints.lg}) {
      min-width: calc(100% / 3);

      &:hover {
         transform: scale(1.1);
      }
   }

   @media (max-width: ${breakpoints.md}) {
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

export const Subtitle = styled.p``

export const Text = styled.p``

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

   &:first-of-type {
      left: 0;
      background: rgb(0, 0, 0);
      background: linear-gradient(
         90deg,
         rgba(0, 0, 0, 1) 0%,
         rgba(255, 255, 255, 0) 100%
      );
   }
   &:last-of-type {
      right: 0;
      background: rgb(0, 0, 0);
      background: linear-gradient(
         -90deg,
         rgba(0, 0, 0, 1) 0%,
         rgba(255, 255, 255, 0) 100%
      );
   }
`

export const Page = styled.div`
   position: relative;
`

export const ImageContainer = styled.figure`
   padding-bottom: 56.25%;
   position: relative;
   width: 100%;
   margin: 0;
   height: 0;
`

export const Details = styled.div``

/*
 * Fetaure
 * Feature Title
 * Feature Close - buttom
 * Maturity
 * Content
 */
