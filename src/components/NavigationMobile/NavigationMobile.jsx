import { NavLink } from "react-router-dom";
import "./NavigationMobile.css";
import logoutWhite from "../../assets/logout_white.svg";
import closeBtn from "../../assets/close-btn.svg";
import { useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function NavigationMobile({
  isLoggedIn,
  onLoginClick,
  isOpen,
  onClose,
  onLogout,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    const handleEscClose = (e) => e.key === "Escape" && onClose();

    if (isOpen) {
      document.addEventListener("keydown", handleEscClose);
      return () => document.removeEventListener("keydown", handleEscClose);
    }
  }, [isOpen, onClose]);

  return (
    <>
      {/* Mobile Menu Modal */}
      <div
        className={`nav__mobile ${isOpen ? "nav__mobile--open" : ""}`}
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div className="nav__mobile_content">
          <div className="nav__mobile_header">
            <h2 className="nav__mobile_title">NewsExplorer</h2>
            <button
              className="nav__mobile_close"
              onClick={onClose}
              aria-label="Close mobile menu"
            >
              <img
                className="nav__mobile_close-icon"
                src={closeBtn}
                alt="Close"
              />
            </button>
          </div>
          <nav className="nav__mobile_nav">
            <NavLink
              to="/"
              className="nav__button"
              onClick={onClose}
            >
              Home
            </NavLink>

            {isLoggedIn ? (
              <>
                <NavLink
                  to="/saved-news"
                  className="nav__button"
                  onClick={onClose}
                >
                  Saved articles
                </NavLink>
                <button
                  className="nav__button nav__signin-mobile"
                  onClick={onLogout}
                >
                  {currentUser.name}
                  <img
                    src={logoutWhite}
                    alt="Logout"
                  />
                </button>
              </>
            ) : (
              <button
                className="nav__mobile-button nav__signin-mobile"
                onClick={() => {
                  onLoginClick();
                  onClose();
                }}
              >
                Sign in
              </button>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavigationMobile;
