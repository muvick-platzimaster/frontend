import styled from "styled-components";

export const HeaderStyled = styled.header`
   position: relative;
   padding: 1rem 0.5rem;
   z-index: 10;
   display: flex;
   align-items: center;

   ul {
      list-style: none;
      padding-left: 0;
      display: flex;
   }

   ul li {
      padding-left: 1rem;
   }
`;
