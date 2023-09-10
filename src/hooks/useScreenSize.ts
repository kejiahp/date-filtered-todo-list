import { useLayoutEffect, useState } from "react";

/**
 * An hook to get the screen size, root document size, on window resize
 */
export function useScreenSize() {
  const [rootDocWidth, setRootDocWidth] = useState(
    document.documentElement.clientWidth
  );

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setRootDocWidth(document.documentElement.clientWidth);
    });
  }, [rootDocWidth, setRootDocWidth]);

  return rootDocWidth;
}
