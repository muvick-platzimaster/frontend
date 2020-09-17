import React, { FC, Fragment, ReactNode } from 'react'
import Header from '../Header'

interface Props {
   children: ReactNode
}

const Layout: FC<Props> = ({ children }: Props) => {
   return (
      <Fragment>
         <Header />
         {children}
      </Fragment>
   )
}

export default Layout
