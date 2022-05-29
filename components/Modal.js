import { useContext, useId } from "react";
import { ModalContext } from "../contexts/Modal.context";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";

const variants = {
  hidden: { opacity: 0, transform: "translateY(0%) translateX(-50%)" },
  enter: { opacity: 1, transform: "translateY(-50%) translateX(-50%)" },
  exit: { opacity: 0, transform: "translateY(0%) translateX(-50%)" },
};

const Modal = () => {
  const { content, isModalOpen, setContent, setIsModalOpen, key, setKey } =
    useContext(ModalContext);

  const handleCloseAlertSelected = () => {
    setContent(null);
    setIsModalOpen(false);
    setKey(`${key}/2`);
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {isModalOpen && (
          <motion.div
            key={key}
            className="fixed w-full max-w-[95%] lg:max-w-[70%] min-h-[300px] lg:min-h-[500px] max-h-[80%] h-max top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-40 bg-white dark:bg-slate-800  shadow-lg overflow-y-auto mt-[calc(75px/2)] flex justify-center lg:items-center"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: "linear" }}
          >
            <button
              className="absolute right-0 top-0 p-3"
              onClick={handleCloseAlertSelected}
            >
              <Icon>
                <AiFillCloseCircle size={25} />
              </Icon>
            </button>
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
