import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';


const Navigation = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [isActive, setIsActive] = useState<boolean>(false);

   const navRef = useRef<HTMLUListElement | null>(null);

   useEffect(() => {
      const clickDetection = (e: MouseEvent) => {
         let { current } = navRef;
         if (current && !current.contains(e.target as Node)) {
            setIsOpen(!isOpen);
         }
      };

      // Close menu if click outside nav menu
      if (isOpen) {
         window.addEventListener('click', clickDetection);
      }

      return () => window.removeEventListener('click', clickDetection);
   }, [isOpen]);

   {/*--- menu toggle and Aria expanded  ---*/ }
   const toggleMenu = () => {
      setIsOpen(!isOpen);
      setIsActive(!isActive);
   }

   return (
      <>
         {/*--- Logo --- */}
         <Link href="/">
            <a>
               <img src="/assets/shared/logo.svg" className="mt-7" alt="logo" />
            </a>
         </Link>

         {/*--- Toggle Button --- */}
         <button
            onClick={toggleMenu}
            aria-expanded={isActive}
            className={` h-6 w-5 bg-no-repeat z-20 md:hidden 
            ${isOpen ? "bg-menu-close" : "bg-menu-open"}
            `}>
            <span className="sr-only">menu</span>
         </button>


         {/*--- Navgation --- */}
         <nav
            ref={navRef}
            className={`
             fixed right-0 top-0 min-h-screen bg-white/10 backdrop-blur-xl w-3/4 transform transition duration-700 ease-in-out z-10
             ${!isOpen ? "translate-x-full" : "translate-x-0"}
             md:translate-x-0
             md:tracking-[2.36px]
             md:text-sm
             md:min-h-[6rem]
            `}>

            <ul
               className="mt-32 space-y-8 ml-8 text-clr-white
               md:m-0 md:space-y-0 md:flex md:justify-evenly md:items-center md:mt-9 md:px-8
               ">
               <li>
                  <Link href="/"><a className="uppercase border-b-4 border-white pb-9 "><span aria-hidden="true" className="mr-3 font-bold md:hidden">00</span>Home</a></Link>
               </li>
               <li>
                  <Link href="/destination"><a className="uppercase  pb-9 hover:border-b-4 hover:border-white/20"><span aria-hidden="true" className="mr-3 font-bold md:hidden">01</span>destination</a></Link>
               </li>
               <li>
                  <Link href="/crew"><a className="uppercase pb-9 hover:border-b-4 hover:border-white/20"><span aria-hidden="true" className="mr-3 font-bold md:hidden">02</span>crew</a></Link>
               </li>
               <li>
                  <Link href="/technology"><a className="uppercase pb-9  hover:border-b-4 hover:border-white/20"><span aria-hidden="true" className="mr-3 font-bold md:hidden">03</span>technology</a></Link>
               </li>
            </ul>
         </nav>
      </>
   )
}

export default Navigation

