import styled from "styled-components";
import { colors } from "../../styles/theme";

export const HeaderStyled = styled.header`
   display: flex;
   justify-content: space-between;
   position: relative;
   padding: 1rem 0.5rem;
   z-index: 10;
`;

export const LoginButton = styled.span`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   background: ${colors.primary};
   color: ${colors.white};
   width: 176px;
   height: 54px;
   font-size: 20px;
   border-radius: 10px;
`;
