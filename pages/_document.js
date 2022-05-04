import Document, { Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";
import { Fragment } from "react";

export default class MyDocument extends Document {
  setGoogleTags() {
    return {
      __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GA_TRACKING_ID}');
          `,
    };
  }

  render() {
    return (
      <html lang="de">
        <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5300295363633699"
        crossorigin="anonymous"></script>

        <ins className="adsbygoogle" style={{display: 'block'}} data-ad-format="fluid" 
        data-ad-layout-key="-4j+cn+1q-f2+j2" data-ad-client="ca-pub-5300295363633699"
         data-ad-slot={8862797840} />

         <script>
           (adsbygoogle = window.adsbygoogle || []).push({});
         </script>

          <Fragment>
            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          </Fragment>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link
            rel="shortcut icon"
            href="***"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="***.css"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/*****.js"
          ></script>
        </body>
      </html>
    );
  }
}
