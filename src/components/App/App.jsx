import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SavedArticles from "../SavedArticles/SavedArticles";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { searchArticles } from "../../utils/newsApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/auth";
import {
  getSavedArticles,
  saveArticle,
  deleteArticle,
  getArticleSaveStatus,
  getSavedArticlesByUrlMap,
} from "../../utils/userApi";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentSearchKeyword, setCurrentSearchKeyword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    _id: "",
    name: "",
    email: "",
  });

  const handleLogin = ({ email, password }) => {
    auth
      .authorize(email, password)
      .then(({ token }) => auth.getUserInfo(token))
      .then((userData) => {
        const user = userData.data || userData;
        setCurrentUser({
          _id: user._id,
          name: user.name,
          email: user.email,
        });
        setIsLoggedIn(true);
        setLoginError("");
        closeActiveModal();
        loadSavedArticles();
      })
      .catch((error) => {
        setLoginError("Email or password incorrect");
      });
  };

  const handleRegistration = ({ email, password, name }) => {
    auth
      .register(email, password, name)
      .then(() => auth.authorize(email, password))
      .then(({ token }) => auth.getUserInfo(token))
      .then((userData) => {
        const user = userData.data || userData;
        setCurrentUser({
          _id: user._id || "",
          name: user.name || "",
          email: user.email || "",
        });
        setIsLoggedIn(true);
        closeActiveModal();
        setRegistrationSuccess(true);
        setRegisterError("");
        loadSavedArticles();
      })
      .catch((err) => {
        if (err && err.message === "User already exists") {
          setRegisterError("This email is not available");
        } else {
          setRegisterError("Something went wrong. Please try again.");
        }
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser({ _id: "", name: "", email: "" });
    setIsLoggedIn(false);
    setSavedArticles([]);
    setError("");
  };

  const loadSavedArticles = () => {
    getSavedArticles()
      .then((items) => {
        setSavedArticles(Array.isArray(items) ? items : []);
      })
      .catch((error) => {
        console.error("Error loading saved articles:", error);
        setSavedArticles([]);
      });
  };

  // Adds the Keyword to the cards
  const handleSaveArticle = (article) => {
    const articleWithKeyword = {
      ...article,
      keyword: currentSearchKeyword || "None",
    };

    return saveArticle(articleWithKeyword)
      .then((saved) => {
        if (saved && saved._id) {
          loadSavedArticles();
        }
      })
      .catch((error) => {
        console.error("Error saving article:", error);

        if (error.message?.includes("authentication") || error.status === 401) {
          handleLogout();
        }
      });
  };

  const handleDeleteArticle = (id) => {
    if (!id) return Promise.resolve();

    return deleteArticle(id)
      .then((result) => {
        if (result?.success !== false) {
          loadSavedArticles();
        }
      })
      .catch((error) => {
        console.error("Error deleting article:", error);

        if (error.message?.includes("authentication") || error.status === 401) {
          handleLogout();
        }
      });
  };

  // Toggle save by after checking with the server
  const handleToggleSave = (article) => {
    if (!isLoggedIn || !article) return Promise.resolve();

    return getArticleSaveStatus(article.url)
      .then(({ isSaved, savedArticle }) => {
        if (isSaved && savedArticle) {
          return handleDeleteArticle(savedArticle._id);
        } else {
          return handleSaveArticle(article);
        }
      })
      .catch(console.error);
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard.data : item))
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard.data : item))
            );
          })
          .catch((err) => console.log(err));
  };

  const openLoginModal = () => {
    setActiveModal("login-modal");
  };

  const openRegistrationModal = () => {
    setActiveModal("register");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const searchArticlesByTopic = async (topic) => {
    setHasSearched(true);
    setIsLoading(true);
    setError("");
    setCurrentSearchKeyword(topic);
    try {
      const data = await searchArticles(topic);
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
      <CurrentUserContext.Provider value={{ currentUser }}>
        <div className="page">
          <div className="page__content">
            <Header
              isLoggedIn={isLoggedIn}
              openLoginModal={openLoginModal}
              handleLogout={handleLogout}
              activeModal={activeModal}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    searchArticles={searchArticlesByTopic}
                    isLoggedIn={isLoggedIn}
                    articles={articles}
                    isLoading={isLoading}
                    error={error}
                    hasSearched={hasSearched}
                    onToggleSave={handleToggleSave}
                    getSavedArticlesByUrlMap={getSavedArticlesByUrlMap}
                  />
                }
              />
              <Route
                path="/saved-news"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <SavedArticles
                      savedArticles={savedArticles}
                      onDeleteArticle={handleDeleteArticle}
                      isLoggedIn={isLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
          <LoginModal
            activeModal={activeModal === "login-modal"}
            closeActiveModal={closeActiveModal}
            handleLogin={handleLogin}
            openRegistrationModal={openRegistrationModal}
            loginError={loginError}
            clearLoginError={() => setLoginError("")}
          />
          <RegisterModal
            activeModal={activeModal === "register"}
            handleRegistration={handleRegistration}
            closeActiveModal={closeActiveModal}
            newUserRegistration={openRegistrationModal}
            openLoginModal={openLoginModal}
            showSuccess={registrationSuccess}
            onCloseSuccess={() => setRegistrationSuccess(false)}
            registerError={registerError}
            clearRegisterError={() => setRegisterError("")}
          />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
