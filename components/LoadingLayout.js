import Router from "next/router";
import { useState } from "react";
import { ImSpinner10 } from "react-icons/im";

const loadingInitial = 0;
let interval = null;

const LoadingLayout = ({ children }) => {
  const [loading, setLoading] = useState(loadingInitial);
  const [visible, setVisible] = useState(false);

  Router.onRouteChangeStart = () => {
    setLoading(15);
    setVisible(true);

    if (interval) clearInterval(interval);

    interval = setInterval(() => {
      setLoading((loading) => (loading >= 95 ? loading + 0 : loading + 5));
    }, 250);
    document.body.style.overflowY = "hidden";
  };

  Router.onRouteChangeComplete = () => {
    clearInterval(interval);
    setLoading(100);

    setTimeout(() => {
      setVisible(false);
    }, 1000);

    document.body.style.overflowY = "auto";
  };

  Router.onRouteChangeError = () => {
    clearInterval(interval);
    setLoading(0);
  };

  const visibleCss = visible ? "visible" : "hidden";

  return (
    <div>
      <div
        className={`${visibleCss} fixed max-w-[100%] top-0 left-0 z-[9999999999999999] bg-sky-400 shadow-sky-400/80 transition-all`}
        style={{
          width: `${loading}%`,
          height: `${loading <= 100 ? "3px" : "0px"}`,
          transition: `width 1s ease-in-out`,
        }}
      ></div>
      {children}
    </div>
  );
};

export default LoadingLayout;
