import { useEffect, useState } from "react";

// Params: Distance (number)
// Returns: Boolean value
// True if Vertical scroll is greater than or equal to distance param

export const useScrolledOffset = (distance: number) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolled && window.scrollY >= distance) {
        setIsScrolled(true);
      } else if (isScrolled && window.scrollY < distance) {
        setIsScrolled(false);
      }
    };
    // This will check for scroll position on mount,
    // so if page is reloaded in the middle, navbar will be displayed
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [distance, isScrolled]);

  return isScrolled;
};
