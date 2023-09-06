import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PortalParams } from "./Portal";

const Portal = ({ children }: PortalParams) => {
  const ref = useRef<null | HTMLElement>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};

export default Portal;
