import { useEffect, useState } from "react";

type UseWindowReturnTypes = {
  width: number;
  height: number;
};

export default function useWindow(): UseWindowReturnTypes {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (!window) return;

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      });
    };
  }, []);

  return {
    width,
    height
  };
}
