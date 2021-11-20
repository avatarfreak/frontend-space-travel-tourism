import useBackgroundImage from 'components/hook/useBackgroundImage';
import React from 'react'


const Destination = () => {
   useBackgroundImage('destination');
   return (
      <main className="text-center grid w-full mx-auto justify-items-center" >

         {/*-- heading --*/}
         <h1 className="uppercase font-sans-cond text-clr-white text-fs-900 tracking-[2.7px] " >
            <span className="font-bold text-white/50">01 </span>
            Pick your destination
         </h1 >

         {/*-- picture --*/}
         <picture className="max-w-1/2">
            <source srcSet="/assets/destination/image-moon.webp" type="image/webp" />
            <img src="/assets/destination/image-moon.png" alt="moon" />
         </picture>

         <article className="space-y-6">
            {/*-- TabList --*/}
            < div className="underline-tablist" role="tablist" >
               <button role="tab" className="font-sans-cond text-fs-200 tracking-[2.36px] uppercase" aria-selected="true">Moon</button>
               <button role="tab" className="font-sans-cond text-fs-200 tracking-[2.36px] uppercase">Mars</button>
               <button role="tab" className="font-sans-cond text-fs-200 tracking-[2.36px] uppercase">Europa</button>
               <button role="tab" className="font-sans-cond text-fs-200 tracking-[2.36px] uppercase">Titan</button>
            </div >

            {/*-- Sub heading --*/}
            < h2 className="uppercase font-serif text-fs-700 text-clr-white" > Moon</h2 >

            {/*-- content --*/}
            <p className="max-w-para font-sans text-fs-400 leading-6 px-6">
               See our planet as you’ve never seen it before.A perfect relaxing trip away to help
               regain perspective and come back refreshed.While you’re there, take in some history
               by visiting the Luna 2 and Apollo 11 landing sites.
            </p>

            < div className="space-y-8 border-t border-white/25" >
               <header>
                  <h3 className="uppercase font-sans-cond text-fs-100 tracking-[2.36px]">Avg.distance</h3>
                  <p className="font-serif text-fs-600 py-3">384,400 km</p>
               </header>

               <header>
                  <h3 className="uppercase font-sans-cond text-fs-100 tracking-[2.36px]">Est.travel time</h3>
                  <p className="font-serif text-fs-600 py-3">3 days</p>
               </header>
            </div >

         </article>

      </main>
   );
}

export default Destination




