import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import { KAKAO_SDK_URL } from "../constants/api";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      </body>
    </Html>
  );
}
