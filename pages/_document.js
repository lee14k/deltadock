import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
      <Html lang="en">
          <Head/>
          <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta name="apple-mobile-web-app-capable" content="yes"/>

          <body className="overflow-x-hidden w-full relative">
          <Main/>
          <NextScript/>
          </body>
      </Html>
  );
}
