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
      <div className="fixed inset-0 h-8 bg-gradient-to-b from-zinc-900 z-10"></div>
      <motion.div
        key={asPath}
        className="fixed inset-0 bg-zinc-900 h-screen overflow-auto  px-4"
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
