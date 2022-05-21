import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import { useState } from "react";

function App() {
  const [isAuth,setIsAuth] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setIsAuth={setIsAuth} />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
