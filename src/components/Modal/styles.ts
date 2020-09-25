import styled from 'styled-components/macro'

export const Container = styled.div``

export const Around = styled.div`
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
   height: 800px;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   overflow-y: scroll;
   z-index: 101;
   ::-webkit-scrollbar {
      width: 10px;
   }

   ::-webkit-scrollbar-track {
      background: #f1f1f1;
   }

   ::-webkit-scrollbar-thumb {
      background: #888;
   }

   ::-webkit-scrollbar-thumb:hover {
      background: #555;
   }
`

export const Button = styled.div`
   /* position: absolute;
   top: 400px; */
`

export const TitleContainer = styled.div`
   position: relative;
   top: 330px;
   height: 130px;
   width: 100%;
   background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6839110644257703) 100%
   );
`

export const Title = styled.h2`
   margin-top: 20px;
`

export const Text = styled.p`
   position: relative;
   width: 60%;
   padding-right: 10px;
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
   display: flex;
`

export const More = styled.div`
   position: relative;
   width: 40%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   padding-left: 10px;
`

export const Image = styled.div`
   background-image: ${(props) =>
      `url('http://image.tmdb.org/t/p/original${props.background}')`};
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   min-height: 480px;
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
