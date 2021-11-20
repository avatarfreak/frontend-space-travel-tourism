import Navigation from '@nav/index';
import React from 'react'


const Header = () => {
   return (
      <header className="p-6 relative flex justify-between items-center
      md:p-0 md:pl-6 
      lg:mt-10
      lg:after:relative
      lg:after:h-[1px]
      lg:after:w-full
      lg:after:-mr-10
      lg:after:bg-white/50
      lg:after:z-10
      ">
         <Navigation />
      </header>
   )
}

export { Header }

