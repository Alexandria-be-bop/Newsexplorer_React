import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";

function Header({ isLoggedIn, openLoginModal, handleLogout, activeModal }) {
  const { pathname } = useLocation();
  const theme = pathname === "/saved-news" ? "nav--black" : "";
  const headerTheme = pathname === "/saved-news" ? "header--black" : "";

  return (
    <div className="header">
      <h1 className={`header__title ${headerTheme}`}>NewsExplorer</h1>
      <Navigation
        theme={theme}
        isLoggedIn={isLoggedIn}
        openLoginModal={openLoginModal}
        handleLogout={handleLogout}
        activeModal={activeModal}
      />
    </div>
  );
}

export default Header;
