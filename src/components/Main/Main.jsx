import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";
import SearchResults from "../SearchResults/SearchResults";

function Main({
  isLoggedIn,
  searchArticles,
  articles,
  isLoading,
  error,
  hasSearched,
  onToggleSave,
  getSavedArticlesByUrlMap,
  currentUser,
}) {
  return (
    <main className="main">
      <SearchForm searchArticles={searchArticles} />
      <SearchResults
        articles={articles}
        isLoading={isLoading}
        error={error}
        hasSearched={hasSearched}
        isLoggedIn={isLoggedIn}
        onToggleSave={onToggleSave}
        getSavedByUrl={getSavedArticlesByUrlMap}
        currentUser={currentUser}
      />
      <About />
    </main>
  );
}

export default Main;
