import { Header } from '@header/index';
import React from 'react'

interface Props {
   children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
   return (
      <div className="wrapper">
         <Header />
         {children}
      </div>
   )
}

export default Layout;

