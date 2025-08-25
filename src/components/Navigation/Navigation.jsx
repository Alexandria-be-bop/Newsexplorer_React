import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logoutWhite from "../../assets/logout_white.svg";
import logoutBlack from "../../assets/logout_black.svg";
import menuDark from "../../assets/menu_dark.svg";
import menuLight from "../../assets/menu_light.svg";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import NavigationMobile from "../NavigationMobile/NavigationMobile";

function Navigation({ isLoggedIn, onLoginClick, theme }) {
  const currentUser = { name: "Elise" };
  const isMobile = useMediaQuery({ query: "(max-width: 590px)" });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {isMobile && (
        <>
          <button
            className="nav__button nav__dropdown"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <img
              src={theme === "nav--black" ? menuDark : menuLight}
              alt="Menu"
            />
          </button>

          <NavigationMobile
            isLoggedIn={isLoggedIn}
            onLoginClick={onLoginClick}
            theme={theme}
            isOpen={isMobileMenuOpen}
            onClose={closeMobileMenu}
          />
        </>
      )}

      {!isMobile && (
        <div className={`nav__desktop ${theme}`}>
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
                to="/saved-news"
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
      )}
    </>
  );
}

export default Navigation;
