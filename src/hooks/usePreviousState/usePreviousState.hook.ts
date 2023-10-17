import { useEffect, useRef } from "react";

/**
 * `usePreviousState` hook
 * @param value the value for which you want to record the state
 */
const usePreviousState = <T>(value: T): T | null => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePreviousState;
