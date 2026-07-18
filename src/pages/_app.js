import "../../styles/global.css";
import "../../styles/custom.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
