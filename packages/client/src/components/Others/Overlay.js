// React
import { useEffect, useRef, useState } from "react";
// CSS
import "../../styles/Others/Overlay.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getOverlay, updateOverlay } from "../../redux/slices/generalSlice";
// Hooks
import useModalTransition from "../../hooks/useModalTransition";
// Data
import { defaultOverlay } from "../../data";

const Overlay = () => {
  const overlay = useSelector(getOverlay);
  const overlayRef = useRef(null);
  const dispatch = useDispatch();

  useModalTransition(overlayRef, overlay.show);
  const countdown = useCountdown(10, overlay.show);

  return (
    <section className='overlay-container__wrapper' ref={overlayRef}>
      <div className='overlay-container'>
        <p>{overlay.msg}</p>
        <div className='overlay-container__buttons'>
          <button
            type='button'
            onClick={() => dispatch(updateOverlay(defaultOverlay))}
          >
            No
          </button>
          <button
            type='button'
            onClick={() => {
              dispatch(overlay.functionUsedOnConfirmation);
              dispatch(updateOverlay({ ...overlay, show: false }));
            }}
            disabled={countdown > 1}
          >
            {countdown > 1 ? countdown : "Yes"}
          </button>
        </div>
      </div>
    </section>
  );
};

const useCountdown = (defaultTime, show) => {
  const [countdown, setCountdown] = useState(defaultTime);

  useEffect(() => {
    if (!show) {
      setCountdown(defaultTime);
    } else {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [countdown, defaultTime, show]);

  return countdown;
};

export default Overlay;
