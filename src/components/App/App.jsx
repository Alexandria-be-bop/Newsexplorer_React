import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx/";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [isLoggedIn] = useState(true);

  const [activeModal, setActiveModal] = useState("");

  const onLoginClick = () => {
    setActiveModal("login-modal");
  };

  const newUserRegistration = () => {
    setActiveModal("register");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <BrowserRouter>
      <div className="page">
        <div className="page__content">
          <Header
            isLoggedIn={isLoggedIn}
            onLoginClick={onLoginClick}
          />
          <Routes>
            <Route
              path="/"
              element={<Main />}
            ></Route>
            <Route
              path="/saved_news"
              element={<Main />}
            ></Route>
          </Routes>
        </div>
        <LoginModal
          activeModal={activeModal === "login-modal"}
          closeActiveModal={closeActiveModal}
          // handleLogin={handleLogin}
          newUserRegistration={newUserRegistration}
        />
        <RegisterModal
          activeModal={activeModal === "register"}
          // handleRegistration={handleRegistration}
          closeActiveModal={closeActiveModal}
          newUserRegistration={newUserRegistration}
          onLoginClick={onLoginClick}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
