// React
import { useRef } from "react";
// CSS
import "../../styles/Others/FormModal.css";
// Redux
import { useSelector } from "react-redux";
import { getFormModal } from "../../redux/slices/generalSlice";
// Hooks
import useModalTransition from "../../hooks/useModalTransition";

const FormModal = () => {
  const formModal = useSelector(getFormModal);
  const formModalRef = useRef(null);

  useModalTransition(formModalRef, formModal.show);

  return (
    <div
      className='form-modal-container'
      style={{ backgroundColor: formModal.color }}
      ref={formModalRef}
    >
      <p>{formModal.msg}</p>
    </div>
  );
};

export default FormModal;
