import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Header from "../../Header/Header";
import { login } from "../../../client-api/api";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  email: string;
  password: string;
}

const LoginComponent: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const navigateToDashboard = useNavigate()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    await login(loginData)
    navigateToDashboard('/dashboard')
  };
  return (
    <div className="login">
      <Header />
      <h2 className="login__title">Login</h2>
      <form action="" className="login__form">
        <div className="login__form__container">
          <label htmlFor="email" className="login__label">
            Email
          </label>
          <input
            className="login__input login__input--email"
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>
        <div className="login__form__container">
          <label htmlFor="password" className="login__label">
            Password
          </label>
          <input
            className="login__input login__input--password"
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="login__buttons">
        <button type="submit" className="login__button" onClick={handleSubmit}>
          Login
        </button>
        <Link to="/signup" className="login__redirect--register">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default LoginComponent;
