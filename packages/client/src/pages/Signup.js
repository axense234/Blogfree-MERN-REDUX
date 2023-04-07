// Components
import SignupInfo from "../components/Signup/SignupInfo";
import SignupForm from "../components/Signup/SignupForm";
// CSS
import "../styles/Signup/Signup.css";

const Signup = () => {
  return (
    <main className='signup-container'>
      <div className='signup-page-content'>
        <SignupInfo />
        <SignupForm />
      </div>
    </main>
  );
};

export default Signup;
