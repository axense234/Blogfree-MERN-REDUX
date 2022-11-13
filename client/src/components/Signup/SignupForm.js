import React, { useState } from "react";
// Form Inputs
import { FormInputs } from "../../data";
// CSS
import "../../styles/Form/FormStyles.css";
// Redux
import { useDispatch } from "react-redux";
import { signupAuthor } from "../../redux/slices/generalSlice";

const SignupForm = () => {
  const [tempLoginInput, setTempLoginInput] = useState({
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  // Redux
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const { password, verifyPassword } = tempLoginInput;
    if (password !== verifyPassword) {
      console.log("error");
    } else {
      try {
        console.log("dispatching");
        dispatch(signupAuthor(tempLoginInput)).unwrap();
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <section className='form-section'>
      <form className='form-container' onSubmit={(e) => submitForm(e)}>
        {FormInputs.map(({ id, inputName, inputType, inputValue }) => {
          return (
            <div key={id} className='input-container'>
              <label htmlFor={inputName}>{inputName}</label>
              <input
                type={inputType}
                id={inputName}
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
        <button type='submit'>Sign Up</button>
      </form>
    </section>
  );
};

export default SignupForm;
