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
      <motion.div key={asPath} className="dotted-bg">
        <Header />
        <Component {...pageProps} />
      </motion.div>
      <Footer />
    </AnimatePresence>
  );
}

export default MyApp;
