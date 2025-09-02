import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logoutWhite from "../../assets/logout_white.svg";
import logoutBlack from "../../assets/logout_black.svg";
import menuDark from "../../assets/menu_dark.svg";
import menuLight from "../../assets/menu_light.svg";
import { useMediaQuery } from "react-responsive";
import { useContext, useState } from "react";
import NavigationMobile from "../NavigationMobile/NavigationMobile";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import closeBtn from "../../assets/close-btn.svg";

function Navigation({
  isLoggedIn,
  openLoginModal,
  theme,
  handleLogout,
  activeModal,
}) {
  const { currentUser } = useContext(CurrentUserContext);
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
          {!activeModal && (
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
          )}
          <NavigationMobile
            isLoggedIn={isLoggedIn}
            openLoginModal={openLoginModal}
            theme={theme}
            isOpen={isMobileMenuOpen}
            onClose={closeMobileMenu}
            handleLogout={handleLogout}
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
              <button
                className="nav__button nav__button-signin"
                onClick={handleLogout}
              >
                {currentUser?.name || "User"}
                <img
                  src={theme === "nav--black" ? logoutBlack : logoutWhite}
                  alt="logout image"
                />
              </button>
            </>
          ) : (
            <>
              <button
                className="nav__button nav__button-signin"
                onClick={openLoginModal}
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
