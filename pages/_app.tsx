import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  const isDarkModeActiveScript = `
  (() => {
    const isDarkModeActive =
      localStorage.getItem("isDarkMode") === "false" ? false : true;
    localStorage.setItem("isDarkMode", isDarkModeActive);
  
    if (isDarkModeActive) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  })();
`;

  return (
    <AnimatePresence initial={false} mode="wait">
      <script
        key="theme-script"
        dangerouslySetInnerHTML={{ __html: isDarkModeActiveScript }}
      />
      <div className="fixed inset-0 h-8 bg-gradient-to-b dark:from-zinc-900 z-10"></div>
      <motion.div
        key={asPath}
        className="fixed inset-0 bg-white dark:bg-zinc-900 h-screen overflow-auto  px-4"
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
