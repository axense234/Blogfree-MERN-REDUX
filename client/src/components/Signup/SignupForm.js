import React from "react";
// Form Inputs
import { FormInputs } from "../../data";
// CSS
import "../../styles/Form/FormStyles.css";

const SignupForm = () => {
  return (
    <section className='form-section'>
      <form className='form-container'>
        {FormInputs.map(({ id, inputName, inputType }) => {
          return (
            <div key={id} className='input-container'>
              <label htmlFor={inputName}>{inputName}</label>
              <input type={inputType} id={inputName} />
            </div>
          );
        })}
        <button>Sign Up</button>
      </form>
    </section>
  );
};

export default SignupForm;
