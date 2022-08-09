import Script from "next/script";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/d69f8c2d2d.js"
        crossorigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
