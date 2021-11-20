import Navigation from '@nav/index';
import React from 'react'


const Header = () => {
   return (
      <header className="p-6 relative flex justify-between items-center
      md:p-0
      md:pl-6
      ">
         <Navigation />
      </header>
   )
}

export { Header }

