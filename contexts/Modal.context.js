import { createContext, useEffect, useState } from "react";

const initialIsModalOpen = false;
const initialContent = null;
const initialKey = null;

const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(initialIsModalOpen);
  const [content, setContent] = useState(initialContent);
  const [key, setKey] = useState(initialKey);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const data = {
    isModalOpen,
    setIsModalOpen,
    content,
    setContent,
    key,
    setKey,
  };

  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};

export default ModalContextProvider;
export { ModalContext };
