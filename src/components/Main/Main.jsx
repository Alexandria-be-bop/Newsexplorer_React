import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";
import Preloader from "../Preloader/Preloader";

function Main() {
  const isLoading = true;

  return (
    <div className="main">
      <SearchForm />
      <div>{isLoading ? <Preloader /> : <Content />}</div>
      <About />
    </div>
  );
}

export default Main;
