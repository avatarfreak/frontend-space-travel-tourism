import React from 'react'
import { useRouter } from 'next/router';
import useBackgroundImage from 'components/hook/useBackgroundImage';
import dataJSON from "../../../data.json";
import { slugify } from 'components/utilities/slugify';

type crewData = typeof dataJSON.crew[number];

export interface ICrewProps {
   data: crewData
}
const roles = ["commander", "mission-specialist", "pilot", "flight-engineer"];

const CrewPage: React.FC<ICrewProps> = ({ data }) => {
   // Setting Background Image
   useBackgroundImage('crew')

   // Router
   const router = useRouter();
   const { crewId } = router.query;
   const pathname = crewId?.toString().toLowerCase() || "commander"

   // Navigating
   const handleNavigation = (e: React.MouseEvent<HTMLButtonElement>) => {
      const pathname = e.currentTarget.textContent;
      router.push(`/crew/${pathname.toString()}`)
   }

   return (
      <>
         <main className="w-full text-center space-x-8  grid  justify-items-center md:mt-md-clamp">
            {/*-- heading --*/}
            <h1 className="uppercase font-sans-cond text-fs-900 tracking-[2.7px] text-clr-white mt-8
            md:justify-self-start md:pl-8 
            ">
               <span className="font-bold text-white/50 mr-4">02</span>
               Meet your crew
            </h1>

            {/*-- picture --*/}
            <picture className="w-3/5 block border-b border-white/50 self-end 
            md:max-w-2/5 md:order-3
            ">
               <source srcSet={data.images.webp} type="image/webp" />
               <img src={data.images.png} alt={data.name} />
            </picture>

            {/*-- TabList --*/}
            <div className="dot-tablist" role="tablist">
               {
                  roles.map((role, idx) => (
                     <button
                        key={idx}
                        role="tab"
                        onClick={handleNavigation}
                        aria-selected={slugify(pathname) === role ? true : false}>
                        <span className="sr-only">{role}</span></button>
                  ))
               }
            </div>


            <article className="space-y-6 md:order-2 md:mt-4">
               {/*-- Sub Heading --*/}
               <header className="space-y-2">
                  <h2 className="uppercase font-serif text-fs-550 text-white/50">{data.role}</h2>
                  <p className="uppercase font-serif text-fs-500">{data.name}</p>
               </header>

               {/*-- content --*/}
               <p className="font-sans text-fs-400 leading-8 max-w-para px-6">{data.bio}</p>

            </article>
         </main>
      </>

   )
}

export { CrewPage }

