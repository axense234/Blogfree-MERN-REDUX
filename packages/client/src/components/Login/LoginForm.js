// React
import React, { useState, useEffect } from "react";
// Form Inputs
import { FormInputs } from "../../data";
// CSS
import "../../styles/Form/FormStyles.css";
// Redux
import {
  loginAuthor,
  getJWT,
  getFormModal,
} from "../../redux/slices/generalSlice";
import { useSelector, useDispatch } from "react-redux";
import { updateFormModal } from "../../redux/slices/generalSlice";
// Components
import FormModal from "../Others/FormModal";

const LoginForm = () => {
  const [tempLoginInput, setTempLoginInput] = useState({
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  const dispatch = useDispatch();
  const jwt = useSelector(getJWT);
  const formModal = useSelector(getFormModal);

  const submitForm = (e) => {
    e.preventDefault();
    const { password, verifyPassword } = tempLoginInput;
    if (password !== verifyPassword) {
      dispatch(
        updateFormModal({
          color: "red",
          msg: "Passwords do not match!",
          show: true,
        })
      );
    } else {
      try {
        console.log("dispatching");
        dispatch(loginAuthor(tempLoginInput, jwt)).unwrap();
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  useEffect(() => {
    if (formModal.show) {
      const timeout = setTimeout(() => {
        dispatch(updateFormModal({ ...formModal, show: false }));
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [dispatch, formModal]);

  return (
    <section className='form-section'>
      <FormModal />
      <form className='form-container' onSubmit={(e) => submitForm(e)}>
        {FormInputs.map(({ id, inputName, inputType, inputValue }) => {
          return (
            <div key={id} className='input-container'>
              <label htmlFor={inputName}>{inputName}</label>
              <input
                type={inputType}
                id={inputName}
                value={tempLoginInput[inputValue]}
                onChange={(e) => {
                  setTempLoginInput({
                    ...tempLoginInput,
                    [inputValue]: e.target.value,
                  });
                }}
              />
            </div>
          );
        })}
        <button type='submit'>Login</button>
      </form>
    </section>
  );
};

export default LoginForm;
