import styled from 'styled-components/macro'
import { transitions } from '../../../styles/theme'

export const Container = styled.section`
   padding: 0 0 0 1rem;
` /* Group */

export const Title = styled.p``

export const RowContainer = styled.div`
   margin-top: 3rem;
` /* Card - Container */

export const Entities = styled.div`
   width: 100%;
   display: flex;
   overflow-x: scroll;
   cursor: grab;
   padding: 2rem 0;
   margin-right: 5rem;
`

export const Subtitle = styled.p``

export const Text = styled.p``

export const Image = styled.img``

export const Item = styled.div`
   margin-right: 0.5rem;
   width: 100%;
   transition: all ${transitions.normal};
   transform-origin: left center;

   &:hover {
      margin-right: 6.725rem;
      transform: scale(1.5);
   }

   &:last-of-type {
      padding-right: 1rem;
      transform-origin: right center;
   }

   &:last-of-type:hover {
   }
`

export const Details = styled.div``

/*
 * Fetaure
 * Feature Title
 * Feature Close - buttom
 * Maturity
 * Content
 */
