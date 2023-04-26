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
  const throttledFn = useCallback(
    (args) => {
      let remainingTime = getRemainingTime(lastTriggered.current, interval);

      if (remainingTime === 0) {
        lastTriggered.current = Date.now();
        cb(args);
      }
    },
    [cb]
  );

  return throttledFn;
};
