import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SavedArticles from "../SavedArticles/SavedArticles";
import { searchNews } from "../../utils/newsApi";

function App() {
  const [isLoggedIn] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const onLoginClick = () => {
    setActiveModal("login-modal");
  };

  const newUserRegistration = () => {
    setActiveModal("register");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const onSearch = async (topic) => {
    setHasSearched(true);
    setIsLoading(true);
    setError("");
    try {
      const data = await searchNews(topic);
      setArticles(Array.isArray(data.articles) ? data.articles : []);
    } catch {
      setArticles([]);
      setError("Sorry, something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
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
              element={
                <Main
                  onSearch={onSearch}
                  isLoggedIn={isLoggedIn}
                  articles={articles}
                  isLoading={isLoading}
                  error={error}
                  hasSearched={hasSearched}
                />
              }
            />
            <Route
              path="/saved-news"
              element={<SavedArticles />}
            />
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
