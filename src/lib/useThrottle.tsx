/*
takes a function, returns a memoized callback 
*/

import { useCallback, useRef, useEffect } from "react";

const getRemainingTime = (lastTriggered, throttleMs) => {
  const elapsedTime = Date.now() - lastTriggered;
  const remainingTime = throttleMs - elapsedTime;

  return remainingTime < 0 ? 0 : remainingTime;
};

export const useThrottledFunction = (cb, interval) => {
  const lastTriggered = useRef(Date.now());
  const timeoutRef = useRef(null);

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const throttledFn = useCallback(
    (args) => {
      let remainingTime = getRemainingTime(lastTriggered.current, interval);

      if (remainingTime === 0) {
        lastTriggered.current = Date.now();
        cb(args);
        cancel();
      }
    },
    [cb, cancel]
  );

  useEffect(() => cancel, [cancel]);

  return throttledFn;
};

/*

else if (!timeoutRef.current) {
        timeoutRef.current = setTimeout(() => {
          remainingTime = getRemainingTime(lastTriggered.current, interval);

          if (remainingTime === 0) {
            lastTriggered.current = Date.now();
            cb(args);
            cancel();
          }
        }, remainingTime);
      }

      */
