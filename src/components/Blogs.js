import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Blogs() {
  const [blog, setBlog] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://djangoephu.herokuapp.com/api/blog/featured"
        );
        setFeatured(res.data[0]);
      } catch (err) {}
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "https://djangoephu.herokuapp.com/api/blog/"
        );
        setBlog(res.data);
      } catch (err) {}
    };
    fetchBlogs();
  }, []);

  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    return "";
  };

  const getBlogs = () => {
    let list = [];
    let result = [];

    blog.map((blogPost) => {
      return list.push(
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">
              {capitalizeFirstLetter(blogPost.category)}
            </strong>
            <h3 className="mb-0">{blogPost.title}</h3>
            <div className="mb-1 text-muted">
              {blogPost.month} {blogPost.day}, {blogPost.year}
            </div>
            <p className="card-text mb-auto">{blogPost.excerpt}</p>
            <Link to={`/${blogPost.slug}`} className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              width="200"
              height="250"
              src={blogPost.thumbnail}
              alt="thumbnail"
            />
          </div>
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i} className="row mb-2">
          <div className="col-md-6">{list[i]}</div>
          <div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
        </div>
      );
    }

    return result;
  };

  return (
    <div className="container mt-3">
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <Link className="p-2 text-muted" to="/category/algorithms">
            Algorithms
          </Link>
          <Link className="p-2 text-muted" to="/category/data_structures">
            Data structures
          </Link>
          <Link className="p-2 text-muted" to="/category/computer_programming">
            Computer programming
          </Link>
          <Link className="p-2 text-muted" to="/category/blockchain">
            Blockchain
          </Link>
          <Link className="p-2 text-muted" to="/category/database">
            Database
          </Link>
          <Link className="p-2 text-muted" to="/category/seo">
            SEO
          </Link>
          <Link className="p-2 text-muted" to="/category/news">
            Technology news
          </Link>
        </nav>
      </div>

      <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">{featured.title}</h1>
          <p className="lead my-3">{featured.excerpt}</p>
          <p className="lead mb-0">
            <Link
              to={`/${featured.slug}`}
              className="text-white font-weight-bold"
            >
              Continue reading...
            </Link>
          </p>
        </div>
      </div>

      {getBlogs()}
    </div>
  );
}

export default Blogs;
