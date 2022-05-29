import Footer from "../components/Footer";
import Menu from "../components/Menu";
import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import ModalContextProvider from "../contexts/Modal.context";
import Modal from "../components/Modal";
import LoadingLayout from "../components/LoadingLayout";
import Head from "next/head";
import ThemeContextProvider, { ThemeContext } from "../contexts/Theme.context";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Web page to see the state of the weather in your country, the state of alerts and the quality of the air"
          key="desc"
        />
        <meta
          name="keywords"
          content="weather, weather forecast, local forecast weather, alert forecast weather, weather report, weather report live"
          key="keywords"
        />
        <meta name="robots" content="index,follow" />
        <meta name="google" content="notranslate" />
        <meta name="author" content="Gianicola Jara" />
        <meta name="copyright" content="Gianicola Jara" />
        <meta name="application-name" content="WalkOut" />
        <meta property="og:title" content="WalkOut" />
        <meta
          property="og:description"
          content="Web page to see the state of the weather in your country, the state of alerts and the quality of the air"
        />
      </Head>
      <ThemeContextProvider>
        <LoadingLayout>
          <ModalContextProvider>
            <div className="flex flex-col max-h-screen h-screen w-full">
              <Modal />
              <Menu />
              <AnimatePresence exitBeforeEnter>
                <motion.main
                  key={router.route}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  variants={variants}
                  transition={{ type: "linear" }}
                  className="flex-grow mt-[75px]"
                >
                  <Component {...pageProps} />
                </motion.main>
              </AnimatePresence>
              <Footer />
            </div>
          </ModalContextProvider>
        </LoadingLayout>
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
