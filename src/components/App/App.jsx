import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx/";
import Main from "../Main/Main";

function App() {
  const [isLoggedIn] = useState(true);
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Main />
    </>
  );
}

export default App;
