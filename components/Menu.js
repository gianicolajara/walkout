import Brand from "./Brand";
import { MdDarkMode } from "react-icons/md";
import ButtonIcon from "./ButtonIcon";
import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme.context";
import { BsFillSunFill } from "react-icons/bs";
import { typesDarkMode } from "../types/appTypes";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";

const variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
  },
};

const Menu = () => {
  const { dark, handleChangeDarkMode } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 left-0 w-full h-[75px] bg-white dark:bg-slate-800 flex items-center shadow-sm z-50">
      <div className="px-10 flex justify-between items-center w-full ">
        <div>
          <Brand />
        </div>
        <div>
          <ButtonIcon className="cursor-pointer" onClick={handleChangeDarkMode}>
            {dark === typesDarkMode.dark ? (
              <motion.div
                key="light"
                variants={variants}
                initial="hidden"
                animate="visible"
              >
                <Icon>
                  <BsFillSunFill size={25} />
                </Icon>
              </motion.div>
            ) : (
              <motion.div
                key="dark"
                variants={variants}
                initial="hidden"
                animate="visible"
              >
                <Icon>
                  <MdDarkMode size={25} />
                </Icon>
              </motion.div>
            )}
          </ButtonIcon>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
