import { useEffect } from "react";
import LoginForm from "../components/LoginBox/LoginForm";

const Login = () => {
  useEffect(() => {
    const userId = localStorage.getItem('user');
    if (userId) {
      localStorage.removeItem('userId');
    }
  })

  return (
    <LoginForm />
  );
}

export default Login;
