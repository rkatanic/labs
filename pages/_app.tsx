import "../styles/main.scss";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <motion.div key={asPath}>
        <Header />
        <Component {...pageProps} />
      </motion.div>
      {/* <div className="w-screen h-32 z-10 bg-gradient-to-b from-black fixed inset-0"></div> */}
      {/* <div className="radial-bg w-screen h-screen fixed inset-0"></div> */}
      {/* <div className="lines pointer-events-none"></div> */}
      {/* <Footer /> */}
      {/* <div className="dotted-bg"></div> */}
      {/* <div className="lines"></div> */}
      {/* <div className="grid"></div> */}
    </AnimatePresence>
  );
}

export default MyApp;
