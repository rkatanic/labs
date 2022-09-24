import "../styles/main.scss";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { asPath } = useRouter();
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <div className="dotted-bg"></div>
      <motion.div
        key={asPath}
        className="relative p-6 sm:p-12 2xl:p-[3vw] min-h-screen flex flex-col justify-between z-20"
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default MyApp;
