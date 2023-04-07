// Components
import LoginForm from "../components/Login/LoginForm";
import LoginInfo from "../components/Login/LoginInfo";
// CSS
import "../styles/Login/Login.css";

const Login = () => {
  return (
    <main className='login-section'>
      <div className='login-page-content'>
        <LoginInfo />
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
