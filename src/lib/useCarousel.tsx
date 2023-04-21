import { useState, useRef } from "react";
import { useThrottledFunction } from "./useThrottle";

export const useCarousel = (
  length: number,
  throttleDelay: number
): [
  { current: number; next: number; prev: number },
  number,
  (args) => void,
  (args) => void
] => {
  const lastTriggered = useRef(Date.now());
  // const throttleRef = useRef(true);
  const [index, setIndex] = useState({
    current: 0,
    next: 1,
    prev: length - 1,
  });

  const [direction, setDirection] = useState(1);

  const nextItem = useThrottledFunction(
    () => {
      setDirection(1);
      setIndex((prevState) => {
        const current =
          prevState.current + 1 === length ? 0 : prevState.current + 1;
        const next = prevState.next + 1 === length ? 0 : prevState.next + 1;
        const prev = prevState.prev + 1 === length ? 0 : prevState.prev + 1;
        return { current, next, prev };
      });
    },
    throttleDelay,
    lastTriggered
  );

  const prevItem = useThrottledFunction(
    () => {
      setDirection(-1);
      setIndex((prevState) => {
        const current =
          prevState.current - 1 < 0 ? length - 1 : prevState.current - 1;
        const next = prevState.next - 1 < 0 ? length - 1 : prevState.next - 1;
        const prev = prevState.prev - 1 < 0 ? length - 1 : prevState.prev - 1;
        return { current, next, prev };
      });
    },
    throttleDelay,
    lastTriggered
  );

  return [index, direction, nextItem, prevItem];
};
