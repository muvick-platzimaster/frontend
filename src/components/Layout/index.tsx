import React, { FC, Fragment } from "react";
import Header from "../Header";

interface Props {
   children: JSX.Element | JSX.Element[];
}

const Layout: FC<Props> = ({ children }: Props) => {
   return (
      <Fragment>
         <Header />
         {children}
      </Fragment>
   );
};

export default Layout;
