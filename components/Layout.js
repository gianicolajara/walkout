import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const Layout = ({ children, keyId }) => {
  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.main
        key={keyId}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
        className="flex-grow mt-[75px]"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  keyId: PropTypes.string.isRequired,
};

export default Layout;
