import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router doesn't manage scroll position. On every navigation (including
 * clicking a link to the page you're already on), go to the #hash target if
 * there is one, otherwise to the top. Jumps instantly when the page changes,
 * scrolls smoothly within the same page.
 *
 * Runs as a layout effect: the new page is already in the DOM but not yet
 * painted, so visitors never see it at the old scroll position.
 */
const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef(pathname);

  useLayoutEffect(() => {
    const samePage = previousPath.current === pathname;
    previousPath.current = pathname;
    const behavior: ScrollBehavior = samePage ? "smooth" : "instant";

    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) {
      target.scrollIntoView({ behavior, block: "start" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior });
    }
  }, [pathname, hash, key]);

  return null;
};

export default ScrollManager;
