import { useState, useEffect } from "react";

const useWindow = () => {
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0
  });

  const updateScroll = () => {
    if (typeof window === "undefined") return;

    setScroll({ x: window.scrollX || 0, y: window.scrollY || 0 });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("load", updateScroll);
    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("load", updateScroll);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return {
    scroll
  };
};

export default useWindow;
