import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";
import SearchResults from "../SearchResults/SearchResults";

function Main({
  isLoggedIn,
  onSearch,
  articles,
  isLoading,
  error,
  hasSearched,
  onToggleSave,
  getSavedByUrl,
  currentUser,
}) {
  return (
    <main className="main">
      <SearchForm onSearch={onSearch} />
      <SearchResults
        articles={articles}
        isLoading={isLoading}
        error={error}
        hasSearched={hasSearched}
        isLoggedIn={isLoggedIn}
        onToggleSave={onToggleSave}
        getSavedByUrl={getSavedByUrl}
        currentUser={currentUser}
      />
      <About />
    </main>
  );
}

export default Main;
