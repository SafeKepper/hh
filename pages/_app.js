import "../public/globals.css"
import "tw-elements/dist/css/tw-elements.min.css";
import React from "react";
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }