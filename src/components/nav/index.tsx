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
               <img src="/assets/shared/logo.svg" className="logo" alt="logo" />
            </a>
         </Link>

         {/*--- Toggle Button --- */}
         <button
            onClick={toggleMenu}
            aria-expanded={isActive}
            className={`
            h-6 w-5 bg-no-repeat z-20
            ${isOpen ? "bg-menu-close" : "bg-menu-open"}
            `}>
            <span className="sr-only">menu</span>
         </button>


         {/*--- Navgation --- */}
         <nav
            ref={navRef}
            className={`
             fixed right-0 top-0 min-h-screen bg-white/10 backdrop-blur-xl w-3/4
             transform transition duration-700 ease-in-out
             z-10
             ${!isOpen ? "translate-x-full" : "translate-x-0"}
            `}>
            <ul
               className="mt-32 space-y-8 ml-8">
               <li>
                  <Link href="/"><a className="uppercase"><span aria-hidden="true" className="mr-3 font-bold">00</span>Home</a></Link>
               </li>
               <li>
                  <Link href="/destination"><a className="uppercase"><span aria-hidden="true" className="mr-3 font-bold">01</span>destination</a></Link>
               </li>
               <li>
                  <Link href="/crew"><a className="uppercase"><span aria-hidden="true" className="mr-3 font-bold">02</span>crew</a></Link>
               </li>
               <li>
                  <Link href="/technology"><a className="uppercase"><span aria-hidden="true" className="mr-3 font-bold">03</span>technology</a></Link>
               </li>
            </ul>
         </nav>
      </>
   )
}

export default Navigation

