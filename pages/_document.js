import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      <body className="overflow-x-hidden	">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
