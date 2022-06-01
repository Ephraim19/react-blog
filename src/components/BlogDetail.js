import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Gist from "react-gist";

const BlogDetail = (props) => {
  const [blog, setBlog] = useState({});
  const slug = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://djangoephu.herokuapp.com/api/blog/" + slug.id
        );
        setBlog(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [slug]);

  const createBlog = () => {
    return { __html: blog.content };
  };

  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    return "";
  };

  return (
    <div className="container mt-3">
      <h1 className="display-7">{blog.title}</h1>
      <p className="text-muted mt-3">
        Category: {capitalizeFirstLetter(blog.category)}
      </p>
      <p className="text-muted mt-0">
        {blog.month} {blog.day}, {blog.year}
      </p>
      <div className="mt-3 mb-3" dangerouslySetInnerHTML={createBlog()} />
      <div>
        <Gist id="8a477621c9a2f0d06198952bac8b1a13" />
      </div>
      <hr />
      <p className="lead mb-5">
        <Link to="/" className="font-weight-bold">
          Back to Blogs
        </Link>
      </p>
    </div>
  );
};

export default BlogDetail;
