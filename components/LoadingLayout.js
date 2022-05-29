import Router from "next/router";
import { useState } from "react";
import { ImSpinner10 } from "react-icons/im";

const loadingInitial = 0;
let interval = null;

const LoadingLayout = ({ children }) => {
  const [loading, setLoading] = useState(loadingInitial);

  Router.onRouteChangeStart = () => {
    setInterval(25);
    interval = setInterval(() => {
      setLoading((loading) => (loading >= 75 ? loading + 0 : loading + 5));
    }, 2000);
    document.body.style.overflowY = "hidden";
  };

  Router.onRouteChangeComplete = () => {
    clearInterval(interval);
    setLoading(100);
    setTimeout(() => {
      setLoading(0);
    }, 2500);
    document.body.style.overflowY = "auto";
  };

  Router.onRouteChangeError = () => {
    clearInterval(interval);
    setLoading(0);
  };

  return (
    <div>
      <div
        className={`fixed max-w-[100%] top-0 left-0 z-[9999999999999999] bg-sky-400`}
        style={{
          width: `${loading}%`,
          height: `${loading === 100 ? "3px" : "0px"}`,
          transition: `width 2s ease-in-out`,
        }}
      ></div>
      {children}
    </div>
  );
};

export default LoadingLayout;
