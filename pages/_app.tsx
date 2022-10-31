import "../styles/main.scss";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Background from "../components/Background";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <div className="fixed inset-0 h-24 bg-gradient-to-b from-[black] z-10 w-screen"></div>
      <div className="fixed bottom-0 h-24 bg-gradient-to-t from-[black] z-10 w-screen"></div>
      <motion.div key={asPath}>
        <Header />
        <Component {...pageProps} />
      </motion.div>
      {/* <div className="w-screen h-32 z-10 bg-gradient-to-b from-black fixed inset-0"></div> */}
      {/* <div className="radial-bg w-screen h-screen fixed inset-0"></div> */}
      {/* <div className="lines pointer-events-none"></div> */}
      {/* <div className="fixed max-w-7xl w-full m-auto z-10 inset-0 border-l border-r border-neutral-800/70 pointer-events-none">
        <div className="w-[1px] h-full border-r border-neutral-800/60 m-auto"></div>
      </div> */}
      {/* <Footer /> */}
      {/* <div className="dotted-bg pointer-events-none"></div> */}
      {/* <div className="lines"></div> */}
      <div className="grid pointer-events-none"></div>
    </AnimatePresence>
  );
}

export default MyApp;
