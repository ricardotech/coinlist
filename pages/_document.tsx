import Document, { Html, Head, Main, NextScript } from "next/document";
import { useContext } from "react";

const FB_PIXEL_ID: string | undefined = process.env.FB_PIXEL_ID;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=AW-10906897981`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-10906897981');
          `,
            }}
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Didact+Gothic&family=Fascinate&family=Quicksand:wght@300;400;500;600;700&family=Staatliches&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          style={{
            backgroundColor: "#000",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
