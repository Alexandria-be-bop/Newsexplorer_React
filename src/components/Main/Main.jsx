import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";
import Preloader from "../Preloader/Preloader";

function Main() {
  const isLoading = false;

  return (
    <div className="main">
      <SearchForm />
      <div>{isLoading ? <Preloader /> : <></>}</div>
      <About />
    </div>
  );
}

export default Main;
