import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn, onLoginClick }) {
  return (
    <div className="header">
      <h1 className="header__title">NewsExplorer</h1>
      <Navigation
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
      />
    </div>
  );
}

export default Header;
