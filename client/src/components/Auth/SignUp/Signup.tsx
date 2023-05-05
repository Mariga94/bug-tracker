import { Link } from "react-router-dom";
import "./Signup.css";
import Header from "../../Header/Header";
import React, { ChangeEvent, useEffect, useState } from "react";
import { signup } from "../../../client-api/api";
import { useNavigate } from "react-router-dom";

interface userData {
  email: string;
  password: string;
}

const SignUpComponent = () => {
  const [userData, setUserData] = useState<userData>({
    email: "",
    password: "",
  });

  const navigateToLogin = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLElement>
  ): Promise<void> => {
    e.preventDefault();
    const res = await signup(userData);
    console.log(res);
    navigateToLogin("/login");
  };

  return (
    <div className="signup">
      <Header />
      <h2 className="signup__title">Signup</h2>
      <form className="signup__form">
        <div className="signup__form__container">
          <label className="signup__label" htmlFor="email" id="email">
            Email
          </label>
          <input
            className="signup__input signup__input--email"
            type="email"
            id="email"
            placeholder="youremail@email.com"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="signup__form__container">
          <label className="signup__label" htmlFor="password">
            Password
          </label>
          <input
            className="signup__input signup__input--password"
            type="password"
            id="password"
            placeholder=" use strong password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="signup__buttons">
        <button className="signup__button" onClick={handleSubmit}>
          Signup
        </button>
        <Link to="/login" className="signup__redirect--login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUpComponent;
