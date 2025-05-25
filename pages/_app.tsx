/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import bg from "../public/images/background.jpg";

import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  const [menu, setMenu] = React.useState(true);

  React.useEffect(() => {}, [menu]);

  return (
    <>
      <div style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1
      }} />
      <Component menu={menu} setMenu={setMenu} {...pageProps} />
    </>
  );
}
