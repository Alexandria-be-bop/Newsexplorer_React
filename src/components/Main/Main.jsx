import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <SearchForm />
      <About />
    </div>
  );
}

export default Main;
