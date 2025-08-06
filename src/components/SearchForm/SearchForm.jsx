import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="SearchForm">
      <h2 className="SearchForm__title">What's going on in the world?</h2>
      <p className="SearchForm__subtitle">
        Find the latest news on any topic and save them in your personal account. 
      </p>
      <div>
        <form className="SearchForm__form">
          <input className="SearchForm__input"></input>
          <button
            type="submit"
            className="SearchForm__button"
          >Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
