import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Container = styled.section`
   margin-bottom: 0.5rem;
   border-bottom: 0.5rem solid ${colors['color-body-base']};
   padding: 3rem 0;
`

export const Item = styled.li`
   width: 100%;
   background-color: ${colors['color-body-base']};
   margin-bottom: 0.5rem;
`
export const Button = styled.button`
   cursor: pointer;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   color: ${colors['color-font-base']};
   border: none;
   padding: 1rem;
   background-color: ${colors['color-body-base']};
`

export const Text = styled.p`
   font-size: 1.3rem;
   margin: 0;
`

export const IconContainer = styled.span`
   height: 32px;
   width: 32px;
   svg {
      transition: all ease 200ms;
   }
`

export const Body = styled.div`
   padding: 2rem;
   font-size: 1.1rem;
   text-align: justify;
   border-top: 1px solid ${colors['color-body-dark']};
`

export const Frame = styled.ul`
   list-style: none;
   padding-left: 0;
`

export const Title = styled.h1`
   text-align: center;
   font-size: 3rem;
`
