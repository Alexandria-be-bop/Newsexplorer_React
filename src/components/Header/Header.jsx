import { Link } from "react-router-dom";
import "./Header.css";
import logoutWhite from "../../assets/logout_white.svg";

function Header({ isLoggedIn, onLoginClick }) {
  const currentUser = { name: "Elise" };
  return (
    <div className="header">
      <h1 className="header__title">NewsExplorer</h1>
      <div className="header__navbar">
        <Link
          to="/"
          className="header__button"
        >
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link
              to="/saved_news"
              className="header__button"
            >
              Saved articles
            </Link>
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
