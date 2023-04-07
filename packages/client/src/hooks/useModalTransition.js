// React
import { useEffect } from "react";

const useModalTransition = (ref, showRef) => {
  useEffect(() => {
    const modal = ref.current;
    let timeout;
    if (showRef) {
      modal.style.display = "flex";
      timeout = setTimeout(() => {
        modal.style.opacity = "1";
        modal.style.transform = "scale(1)";
      }, 100);
    } else {
      modal.style.opacity = "0";
      modal.style.transform = "scale(0)";
      timeout = setTimeout(() => {
        modal.style.display = "none";
      }, 100);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showRef, ref]);
};

export default useModalTransition;
