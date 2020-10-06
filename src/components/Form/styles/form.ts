import styled from 'styled-components/macro'
import { Link as ReactRouterDomLink } from 'react-router-dom'
import { breakpoints, colors, transitions, radius } from '../../../styles/theme'

export const Container = styled.form``

export const Error = styled.div`
   width: 100%;
   padding: 0.125rem 1rem;
   background-color: ${colors['color-error']};
   margin-bottom: 1rem;
   border-radius: ${radius.standard};

   p {
      font-size: 0.8rem;
      text-align: left;
   }
`

export const Base = styled.div``

export const Title = styled.h1`
   text-align: left;
`

export const FormGroup = styled.div`
   margin-bottom: 3rem;
   position: relative;
   height: 50px;
   width: 100%;
   overflow-x: hidden;
`

export const Text = styled.p`
   margin-top: 2rem;
   font-size: 0.9rem;
   color: ${colors['color-font-muted']};
`

export const TextSmall = styled.small`
   color: ${colors['color-font-muted']};
`

export const Link = styled(ReactRouterDomLink)`
   font-weight: 700;
   color: ${colors['color-font-base']};

   &:hover {
      text-decoration: underline;
   }
`

export const Input = styled.input`
   width: 100%;
   height: 100%;
   padding: 20px 0.5rem 5px;
   background-color: transparent;
   outline: none;
   color: ${colors['color-font-base']};
   font-size: 1.2rem;
   border: none;

   &:focus + label span,
   &:valid + label span {
      transform: translateY(-10px);
      font-size: 0.8rem;
      color: ${colors['color-primary']};
   }

   &:focus + label::after,
   &:valid + label::after {
      transform: translateX(0);
   }

   &:invalid:focus + label::after {
      transform: translateX(0);
      border-bottom: 1px solid ${colors['color-error']};
   }
`

export const Submit = styled.button`
   width: 100%;
   margin: 0 auto;
   height: 40px;
   cursor: pointer;
   background-color: ${colors['color-primary']};
   color: ${colors['color-font-base']};
   font-size: 1rem;
   border: none;
   outline: none;
   border-radius: ${radius.standard};
   transition: all ${transitions.normal};

   &:disabled {
      background-color: ${colors['color-primary-muted']};
      cursor: default;
      opacity: 0.8;
   }
`

export const Grid = styled.div`
   background-color: #00000099;
   padding: 3rem;

   @media (max-width: ${breakpoints.sm}) {
      padding: 2rem;
   }

   @media (max-width: ${breakpoints.xs}) {
      padding: 2rem 1rem;
   }
`
export const Label = styled.label`
   bottom: 0;
   left: 0;
   position: absolute;
   width: 100%;
   height: 100%;
   font-size: 0.8rem;
   pointer-events: none;
   border-bottom: 1px solid ${colors['color-font-base']};

   &::after {
      content: '';
      display: initial;
      left: 0;
      bottom: -1px;
      position: absolute;
      height: 100%;
      width: 100%;
      border-bottom: 1px solid ${colors['color-primary']};
      transform: translateX(-100%);
      transition: all ${transitions.normal};
   }
`

export const Span = styled.span`
   transition: all ${transitions.normal};
   font-size: 1rem;
   position: absolute;
   bottom: 50%;
   transform: translateY(50%);
   left: 0;
`
