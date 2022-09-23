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
      <div className="lines"></div>
      <div className="grid"></div>
      <div className="grid-left px-6 sm:px-12 lg:p-0 fixed h-screen w-full flex justify-between max-w-3xl">
        <div className="w-[1px] bg-gray-900"></div>
        <div className="w-[1px] bg-gray-900"></div>
        <div className="w-[1px] bg-gray-900"></div>
        <div className="w-[1px]"></div>
      </div>
      <div className="px-6 sm:px-12 lg:p-0 fixed z-0 inset-0 flex justify-between max-w-3xl m-auto">
        <div className="w-[1px] bg-gray-900"></div>
        <div className="w-[1px] bg-gray-900"></div>
        <div className="w-[1px] bg-gray-900"></div>
        <div className="w-[1px] bg-gray-900"></div>
      </div>
      <div className="grid-right px-6 sm:px-12 lg:p-0 fixed h-screen w-full flex justify-between max-w-3xl">
        <div className="w-[1px]"></div>
        <div className="w-[1px] bg-gray-900"></div>
        <div className="w-[1px] bg-gray-900"></div>
        <div className="w-[1px] bg-gray-900"></div>
      </div>
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
