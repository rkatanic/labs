import "../styles/main.scss";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <motion.div key={asPath}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
