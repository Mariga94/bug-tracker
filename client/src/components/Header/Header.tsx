import logo30 from "../../assets/images/logo/icons8-bug-30.png";
import './Header.css';
const Header = () => {
  return (
    <header className="login__header">
        <img src={logo30} alt="logo" className="login__header__logo" />
        <h1 className="login__header__title">IssueTrc</h1>
      </header>
  );
};

export default Header;
