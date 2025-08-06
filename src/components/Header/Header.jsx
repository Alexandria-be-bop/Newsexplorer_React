import "./Header.css";
import union from "../../assets/union.svg";

function Header({ isLoggedIn }) {
  const currentUser = { name: "Elise" };
  return (
    <div className="header">
      <h1 className="header__title">NewsExplorer</h1>
      <div className="header__navbar">
        <button className="header__button">Home</button>
        {isLoggedIn ? (
          <>
            <button className="header__button">Saved articles</button>
            <button className="header__button header__button-signin">
              {currentUser.name}
              <img
                src={union}
                alt="union sign"
              />
            </button>
          </>
        ) : (
          <>
            <button className="header__button header__button-signin">
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
