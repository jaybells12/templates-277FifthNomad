import { useState } from "react";

export const useCarouselIndex = (
  length: number
): [
  { current: number; next: number; prev: number },
  number,
  () => void,
  () => void
] => {
  const [index, setIndex] = useState({
    current: 0,
    next: 1,
    prev: length - 1,
  });
  const plusOne = () => {
    setIndex((prevState) => {
      const current =
        prevState.current + 1 === length ? 0 : prevState.current + 1;
      const next = prevState.next + 1 === length ? 0 : prevState.next + 1;
      const prev = prevState.prev + 1 === length ? 0 : prevState.prev + 1;
      return { current, next, prev };
    });
  };
  const minusOne = () => {
    setIndex((prevState) => {
      const current =
        prevState.current - 1 < 0 ? length - 1 : prevState.current - 1;
      const next = prevState.next - 1 < 0 ? length - 1 : prevState.next - 1;
      const prev = prevState.prev - 1 < 0 ? length - 1 : prevState.prev - 1;
      return { current, next, prev };
    });
  };
  return [index, length, plusOne, minusOne];
};
