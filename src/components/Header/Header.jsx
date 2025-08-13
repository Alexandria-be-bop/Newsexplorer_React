import { NavLink } from "react-router-dom";
import "./Header.css";
import logoutWhite from "../../assets/logout_white.svg";

function Header({ isLoggedIn, onLoginClick }) {
  const currentUser = { name: "Elise" };
  return (
    <div className="header">
      <h1 className="header__title">NewsExplorer</h1>
      <div className="header__navbar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `header__button ${isActive ? "header__button--active" : ""}`
          }
        >
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink
              to="/saved_news"
              className={({ isActive }) =>
                `header__button ${isActive ? "header__button--active" : ""}`
              }
            >
              Saved articles
            </NavLink>
            <button className="header__button header__button-signin">
              {currentUser.name}
              <img
                src={logoutWhite}
                alt="union sign"
              />
            </button>
          </>
        ) : (
          <>
            <button
              className="header__button header__button-signin"
              onClick={onLoginClick}
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
