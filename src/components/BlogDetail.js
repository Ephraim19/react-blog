import React, { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = (props) => {
  const [blog, setBlog] = useState({});
  const slug = useParams();
  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.get('https://djangoephu.herokuapp.com/api/blog/' + slug.id);
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
      <h1 className="display-2">{blog.title}</h1>
      <h2 className="text-muted mt-3">
        Category: {capitalizeFirstLetter(blog.category)}
      </h2>
      <h4>
        {blog.month} {blog.day}
      </h4>
      <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()} />
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
