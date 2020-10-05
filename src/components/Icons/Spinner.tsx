import React from 'react'
import styled from 'styled-components'

/* Types */
interface Props {
   color: string
   width?: string
   height?: string
}

/* Styles */
const Spiner = styled.div`
   display: flex;
   width: 100%;
   height: 100%;
   justify-content: center;
   align-items: center;

   .lds-dual-ring {
      display: block;
      width: 1rem;
      height: 1rem;
   }

   .lds-dual-ring:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.color};
      border-color: ${({ theme }) => theme.color} transparent
         ${({ theme }) => theme.color} transparent;
      animation: lds-dual-ring 1.2s linear infinite;
   }
   @keyframes lds-dual-ring {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`

const Spinner = ({ color, width = '64px', height }: Props): JSX.Element => {
   return (
      <Spiner theme={{ color, width, height }}>
         <div className="lds-dual-ring"></div>
      </Spiner>
   )
}

export default Spinner
