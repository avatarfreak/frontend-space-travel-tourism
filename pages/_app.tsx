import Layout from "@layout/index";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import "../src/components/styles/index.scss";
import "tailwindcss/tailwind.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
         </Head>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </>
   );
}

export default MyApp;

