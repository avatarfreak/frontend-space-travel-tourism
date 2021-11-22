import Layout from "@layout/index";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import "../src/components/styles/index.scss";
import "tailwindcss/tailwind.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

   // Stop animation on browser resize
   React.useEffect(() => {
      let resizeTimer: any;
      window.addEventListener("resize", () => {
         document.body.classList.add("resize-animation-stopper");

         clearTimeout(resizeTimer);

         resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
         }, 400)
      })

   }, [])

   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
         </Head>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </>
   );
}

export default MyApp;

