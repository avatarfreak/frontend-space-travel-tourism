import useBackgroundImage from "components/hook/useBackgroundImage";
import Head from "next/head";

const Home = () => {
   // setting Background image
   useBackgroundImage('home')

   return (
      <>
         <Head>
            <meta name="description" content="Experience the outer space." />
            <title>Home</title>
         </Head>

         <main className="text-center mx-auto md:mt-md-clamp lg:w-full lg:mt-lg-clamp lg:grid lg:grid-cols-lg-home">
            <article className="lg:col-start-2 lg:col-span-1 lg:text-left">
               {/*--- Title ---*/}
               <h1 className="uppercase font-sans-cond text-fs-900 tracking-[2.7px]">So you want to travel to
                  <span className="block text-fs-800 text-clr-white">Space</span>
               </h1>

               {/*--- content ---*/}
               <p className="font-sans text-fs-400 py-2 px-4 leading-6 max-w-para md:leading-7 lg:px-0">
                  Let’s face it; if you want to go to space, you might as well genuinely go to
                  outer space and not hover kind of on the edge of it. Well sit back, and relax
                  because we’ll give you a truly out of this world experience!
               </p>
            </article>

            {/*--- image ---*/}
            <div className="pt-20 pb-12 lg:col-start-3 col-span-1">
               <a href="#" className="btn-explore uppercase w-40 h-40 rounded-full bg-white inline-flex items-center justify-center text-fs-300 font-serif text-clr-dark tracking-[1.25px] md:w-60 md:h-60 lg:w-64 lg:h-64">
                  Explore
               </a>
            </div>
         </main>
      </>
   )
}

export default Home
