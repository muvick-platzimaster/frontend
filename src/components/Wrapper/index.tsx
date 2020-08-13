import React from "react";
import { breakpoints } from "../../styles/theme";

/* Styles */
import { WrapperStyled } from "./styles";

type Props = { children: JSX.Element | JSX.Element[]; maxWidth?: string };

const Wrapper: React.FC<Props> = ({
   children,
   maxWidth = breakpoints.lg
}: Props): JSX.Element => {
   return <WrapperStyled maxWidth={maxWidth}>{children}</WrapperStyled>;
};

export default Wrapper;
