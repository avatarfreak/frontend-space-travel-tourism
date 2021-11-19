import Head from "next/head";

const Home = () => {
   return (
      <>
         <Head>
            <meta name="description" content="Experience the outer space." />
            <title>Home</title>
         </Head>

         <main className="text-center">
            {/*--- Title ---*/}
            <h1 className="uppercase">So you want to travel to Space</h1>

            {/*--- content ---*/}
            <p>
               Let’s face it; if you want to go to space, you might as well genuinely go to
               outer space and not hover kind of on the edge of it. Well sit back, and relax
               because we’ll give you a truly out of this world experience!
            </p>

            {/*--- image ---*/}
            <div>
               <a href="#" className="uppercase">Explore</a>
            </div>
         </main>
      </>
   )
}

export default Home;
