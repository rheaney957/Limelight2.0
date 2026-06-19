import React, { useState } from "react";
import "../styles/globals.css";
import bg from "../public/images/background.jpg";
import type { AppProps } from "next/app";
import MobileMenu from "../components/MobileMenu";

export default function App({ Component, pageProps }: AppProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
      <Component onMenuToggle={toggleMobileMenu} mobileMenuOpen={mobileMenuOpen} {...pageProps} />
    </>
  );
}
