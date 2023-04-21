/*
takes a function, returns a memoized callback 
*/

import { useCallback, useRef, useEffect, MutableRefObject } from "react";

const getRemainingTime = (lastTriggered: number, throttleMs: number) => {
  const elapsedTime = Date.now() - lastTriggered;
  const remainingTime = throttleMs - elapsedTime;

  return remainingTime < 0 ? 0 : remainingTime;
};

export const useThrottledFunction = (
  cb: any,
  interval: number,
  lastTriggered: MutableRefObject<number>
) => {
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
