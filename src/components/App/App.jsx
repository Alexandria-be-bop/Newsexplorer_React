import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx/";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [isLoggedIn] = useState(true);
  return (
    <BrowserRouter>
      <>
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route
            path="/"
            element={<Main />}
          ></Route>
          <Route
            path="/saved_news"
            element={<Main />}
          ></Route>
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
