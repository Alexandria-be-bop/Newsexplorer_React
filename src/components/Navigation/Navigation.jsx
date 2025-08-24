import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logoutWhite from "../../assets/logout_white.svg";
import logoutBlack from "../../assets/logout_black.svg";

function Navigation({ isLoggedIn, onLoginClick, theme }) {
  const currentUser = { name: "Elise" };
  // const mobileView = window.matchMedia("(max-width: 600px)");
  return (
    <>
      <div className={`nav__navbar ${theme}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav__button  ${isActive ? "nav__button--active" : ""}`
          }
        >
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink
              to="/saved_news"
              className={({ isActive }) =>
                `nav__button ${isActive ? "nav__button--active" : ""}`
              }
            >
              Saved articles
            </NavLink>
            <button className="nav__button nav__button-signin">
              {currentUser.name}
              <img
                src={theme === "nav--black" ? logoutBlack : logoutWhite}
                alt="union sign"
              />
            </button>
          </>
        ) : (
          <>
            <button
              className="nav__button nav__button-signin"
              onClick={onLoginClick}
            >
              Sign in
            </button>
          </>
        )}
      </div>
      {/* moble nav */}
    </>
  );
}

export default Navigation;
