import { useEffect, useState } from "react";

// Params: none
// Returns: Boolean value
// True if Vertical scroll is greater than or equal to viewport height

export const useScrolledOffset = (offset: number) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolled && window.scrollY >= window.innerHeight - offset) {
        setIsScrolled(true);
      } else if (isScrolled && window.scrollY < window.innerHeight - offset) {
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
  }, [offset, isScrolled]);

  return isScrolled;
};
