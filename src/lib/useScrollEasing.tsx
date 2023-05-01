// This hook eases the scroll animation, the easing function can be swapped out for other types,
// Change the duration to lengthen or shorten the animation, included different easeIn functions

export const useScrollEasing = () => {
  return (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    // Need to pass a ref to this, instead of accessing DOM directly
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    const duration = 1000;

    function scrollToPosition(position: number) {
      let startPosition = window.pageYOffset;
      let distance = position - startPosition;
      let startTime = null;

      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let scrollTop = easeInQuint(
          timeElapsed,
          startPosition,
          distance,
          duration
        );
        window.scrollTo(0, scrollTop);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      // function easeInExpo(t, b, c, d) {
      //   return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      // }

      function easeInQuint(t: number, b: number, c: number, d: number) {
        t /= d;
        return c * t * t * t * t * t + b;
      }

      // function easeInQuart(t, b, c, d) {
      //   t /= d;
      //   return c * t * t * t * t + b;
      // }

      // function easeInCubic(t, b, c, d) {
      //   t /= d;
      //   return c * t * t * t + b;
      // }

      requestAnimationFrame(animation);
    }

    scrollToPosition(elem.offsetTop);
  };
};
