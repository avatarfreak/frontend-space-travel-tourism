import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import data from "../../../data.json";
import useBackgroundImage from 'components/hook/useBackgroundImage';

type DestProp = typeof data.destinations[number]

export interface DestIProps {
   data: DestProp
}

const stars = ['moon', 'mars', 'europa', 'titan'];

const DestPage: React.FC<DestIProps> = ({ data }) => {
   // setting Background Image
   useBackgroundImage('destination')

   //Getting pathname
   const router = useRouter();
   const { destId } = router.query;
   const pathname = destId && destId.toString().toLowerCase() || "moon";

   const handleNavigation = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Getting inner content of button
      const pathname = e.currentTarget.textContent;

      // push to url
      router.push(`/destination/${pathname}`)
   }

   return (
      <>
         <Head>
            <meta name="description" content={data.name} />
            <title>Destination | {data.name}</title>
         </Head>

         <main className="text-center grid w-full space-y-8 mx-auto justify-items-center md:mt-md-clamp lg:grid-cols-lg-dest lg:text-left lg:items-center lg:mt-20 lg:gap-x-4 ">

            {/*-- heading --*/}
            <h1 className="uppercase font-sans-cond text-clr-white text-fs-900 tracking-[2.7px] md:justify-self-start md:pl-8 lg:col-start-2 lg:col-span-3 lg:row-start-1 lg:pl-0" >
               <span className="font-bold text-white/50 mr-4">01</span>
               Pick your destination
            </h1 >

            {/*-- picture --*/}
            <picture className="max-w-1/2 md:max-w-2/5 lg:max-w-full lg:col-start-2 lg:row-start-2 lg:row-span-3">
               <source srcSet={data.images.webp} type="image/webp" />
               <img src={data.images.png} alt={data.name} width={data.images.width} height={data.images.height} loading="lazy" />
            </picture>

            <article className="space-y-6 lg:col-start-3 lg:col-span-2">
               {/*-- TabList --*/}
               <div className="underline-tablist" role="tablist" >
                  {
                     stars.map((star, idx) => (
                        <button
                           key={idx}
                           role="tab"
                           className="font-sans-cond text-fs-200 tracking-[2.36px] uppercase"
                           onClick={handleNavigation}
                           aria-selected={star === pathname ? true : false}>
                           {star}
                        </button>
                     ))
                  }
               </div >

               {/*-- Sub heading --*/}
               <h2 className="uppercase font-serif text-fs-700 text-clr-white" >{data.name}</h2 >

               {/*-- content --*/}
               <p className="max-w-para font-sans text-fs-400 leading-6 px-6 lg:px-0 min-h-[7.75rem]">{data.description}</p>

               <div className="space-y-8 border-t border-white/25 pt-8 md:flex md:justify-evenly md:space-y-0 lg:justify-start lg:space-x-32" >
                  <header>
                     <h3 className="uppercase font-sans-cond text-fs-100 tracking-[2.36px]">Avg.distance</h3>
                     <p className="uppercase font-serif text-fs-600 py-3">{data.distance}</p>
                  </header>

                  <header>
                     <h3 className="uppercase font-sans-cond text-fs-100 tracking-[2.36px]">Est.travel time</h3>
                     <p className="uppercase font-serif text-fs-600 py-3">{data.travel}</p>
                  </header>
               </div >
            </article>

         </main>
      </>
   )
}

export { DestPage }

