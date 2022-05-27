import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Category from "./components/Category";
import BlogDetail from "./components/BlogDetail";

import Layout from "./hocs/Layout";

import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/home" element={<Home setIsAuth={setIsAuth} />} />
          <Route path="/" element={<Blogs />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/:id" element={<BlogDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
