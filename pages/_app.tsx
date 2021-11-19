import { Layout } from "@layout/index";
import { AppProps } from "next/app";
import Head from "next/head";

import "tailwindcss/tailwind.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
            <link
               href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Bellefair&family=Barlow:wght@400;700&display=swap"
               rel="stylesheet" />
         </Head>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </>
   );
}

export default MyApp;

