import styled from 'styled-components/macro'

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
   position: fixed;
   background: #181818;
   height: auto;
   top: 40%;
   left: 50%;
   transform: translate(-50%, -50%);
   border-radius: 10px;
`

export const Button = styled.div`
   position: absolute;
   top: 400px;
`

export const Title = styled.h2`
   position: absolute;
   top: 300px;
`

export const Text = styled.p`
   position: relative;
   width: 60%;
`

export const Tag = styled.span`
   position: relative;
   margin-right: 10px;
   margin-top: 10px;
   display: inline-block;
`

export const Detail = styled.div`
   position: relative;
   width: 100%;
   display: flex;
`

export const More = styled.div`
   position: relative;
   width: 40%;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const Image = styled.div`
   background-image: ${(props) =>
      `url('http://image.tmdb.org/t/p/original${props.background.background}')`};
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   height: 480px;
   width: 850px;
   border-radius: 10px 10px 0 0;
`

export const CloseButton = styled.div`
   position: absolute;
   top: 20px;
   right: 20px;
   width: 40px;
   height: 40px;
   background: #181818;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   & svg {
      width: 60%;
      height: 60%;
   }
`
