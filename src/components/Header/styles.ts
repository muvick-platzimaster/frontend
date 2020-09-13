import styled from "styled-components";

export const HeaderStyled = styled.header`
   position: relative;
   padding: 1rem 0.5rem;
   z-index: 10;
   display: flex;
   justify-content: space-between;

   ul {
      margin: 0;
      list-style: none;
      padding-left: 0;
      display: flex;
      align-items: center;
   }

   ul li {
      padding-left: 1rem;
   }

   button {
      background-color: transparent;
      cursor: pointer;
      border: none;
      margin-left: 1rem;
   }
`;
