import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx/";

function App() {
  const [isLoggedIn] = useState(true);
  return <Header isLoggedIn={isLoggedIn} />;
}

export default App;
