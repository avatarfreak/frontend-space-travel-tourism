import React from "react";
import { useRouter } from "next/router";

import useBackgroundImage from "components/hook/useBackgroundImage";
import { slugify } from "components/utilities/slugify";
import dataJSON from "../../../data.json";

type techData = typeof dataJSON.technology[number];
export interface TechIProps {
   data: techData;
}

const btnLists = ["launch vehicle", "spaceport", "space capsule"];

const TechPage: React.FC<TechIProps> = ({ data }) => {
   // Setting backround Image
   useBackgroundImage('technology')

   const router = useRouter();
   const { techId } = router.query;
   const pathname = techId?.toString().toLowerCase() || "launch-vehicle";

   const handleTab = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Get inner value of button
      const pathname = slugify(e.currentTarget.querySelector('span').textContent)

      // update url
      router.push(`/technology/${pathname}`);
   }

   return (
      <main className="text-center space-y-8 w-full">
         {/*-- heading --*/}
         <h1 className="uppercase font-sans-cond text-fs-900 tracking-[2.7px]">
            <span className="font-bold text-white/50 mr-2">03</span>
            Space launch 101
         </h1>

         {/*-- picture --*/}
         <picture>
            <source media="(min-width: 64rem)" srcSet={data.images.portrait} type="image/jpg" />
            <img src={data.images.landscape} alt={data.name} />
         </picture>

         {/*-- TabList --*/}
         <div className="num-tablist" role="tablist">
            {
               btnLists.map((item, idx: number) => (
                  <button
                     key={idx}
                     role="tab"
                     onClick={handleTab}
                     aria-selected={pathname === slugify(item) ? true : false}>
                     <span className="sr-only">{item}</span>
                     {idx + 1}
                  </button>
               ))
            }
         </div>


         <article className="px-8 space-y-8">
            {/*-- Sub Heading --*/}
            <header className="space-y-2">
               <h2 className="uppercase font-sans-cond text-550 tracking-[2.36px]">The terminology...</h2>
               <p className="uppercase font-serif text-fs-500 ">{data.name}</p>
            </header>

            {/*-- content --*/}
            <p className="font-sans text-fs-400 leading-6 max-w-para">{data.description}</p>
         </article>

      </main>)
}

export { TechPage }

