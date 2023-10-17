import { useEffect, useState } from "react";
import type { DebounceDelay, DebounceValue } from "./types";

/**
 * `useDebounce` hook
 * @description hook to debounce a value
 * @param {DebounceValue} value Debounce value
 * @param {Partial<DebounceDelay>} delay Debounce value delay (in miliseconds, default 500ms)
 * @returns {DebounceValue} Debounced value
 */
const useDebounce = <T>(
  value: T extends DebounceValue ? T : DebounceDelay,
  delay: Partial<DebounceDelay> = 500
): typeof value => {
  const [debouncedValue, setDebouncedValue] = useState<typeof value>(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
