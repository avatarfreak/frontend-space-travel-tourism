import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);

      return initialProps;
   }
   render() {
      return (
         <Html lang="en">
            <Head>
               <meta name="description" content="Space travel accepted by avatarfreak" />
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
               <link
                  href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Bellefair&family=Barlow:wght@400;700&display=swap"
                  rel="stylesheet"
               />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
