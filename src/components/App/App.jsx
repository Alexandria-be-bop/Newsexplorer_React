import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx/";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  const [isLoggedIn] = useState(true);
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
