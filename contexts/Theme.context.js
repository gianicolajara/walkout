import { createContext, useEffect, useState } from "react";
import { typesDarkMode } from "../types/appTypes";
import { getItem, setItem } from "../utils/localstorage.utils";

const storageItemName = "theme";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [dark, setDark] = useState();

  useEffect(() => {
    const themeLS = getItem(storageItemName);

    if (themeLS) {
      setDark(themeLS.value);
    } else {
      if (typeof window !== "undefined") {
        if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
          setDark(typesDarkMode.dark);
        } else {
          setDark(typesDarkMode.light);
        }

        setDark(typesDarkMode.dark);
      } else {
        setDark(typesDarkMode.light);
      }
    }
  }, []);

  useEffect(() => {
    if (dark === typesDarkMode.dark) {
      document.documentElement.classList.add("dark");
      setItem(storageItemName, { value: typesDarkMode.dark });
    } else if (dark === typesDarkMode.light) {
      document.documentElement.classList.remove("dark");
      setItem(storageItemName, { value: typesDarkMode.light });
    }
  }, [dark]);

  const handleChangeDarkMode = () => {
    setDark(
      dark === typesDarkMode.dark ? typesDarkMode.light : typesDarkMode.dark
    );
  };

  const data = { dark, handleChangeDarkMode };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
export { ThemeContext };
