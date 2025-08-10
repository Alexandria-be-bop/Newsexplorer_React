import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search-form">
      <h2 className="search-form__title">What's going on in the world?</h2>
      <p className="search-form__subtitle">
        Find the latest news on any topic and save them in your personal account. 
      </p>
      <div>
        <form className="search-form__form">
          <input className="search-form__input" placeholder="Enter topic"></input>
          <button
            type="submit"
            className="search-form__button"
          >Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
