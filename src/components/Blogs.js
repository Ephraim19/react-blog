import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function Blogs() {
  const[blog,setBlog] = useState([]);
  const[featured, setFeatured] = useState([]);

  useEffect(()=>{
    const fetchData = async() => {
      try{
        const res = await axios.get('http://127.0.0.1:8000/api/blog/featured');
        setFeatured(res.data[0]);
      } catch(err){

      }
    }
    fetchData();
  },[])

  useEffect(()=>{
    const fetchBlogs = async() => {
      try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog`);
        setBlog(res.data);
      } catch(err){

      }
    }
    fetchBlogs();
  },[])

  const capitalizeFirstLetter = (word) => {
    if (word)
        return word.charAt(0).toUpperCase() + word.slice(1);
    return '';
};

const getBlogs =() =>{

}

return(
  <div className='container mt-3'>
  <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
          <Link className="p-2 text-muted" to='/category/world'>World</Link>
          <Link className="p-2 text-muted" to='/category/environment'>Environment</Link>
          <Link className="p-2 text-muted" to='/category/technology'>Technology</Link>
          <Link className="p-2 text-muted" to='/category/design'>Design</Link>
          <Link className="p-2 text-muted" to='/category/culture'>Culture</Link>
          <Link className="p-2 text-muted" to='/category/business'>Business</Link>
          <Link className="p-2 text-muted" to='/category/politics'>Politics</Link>
          <Link className="p-2 text-muted" to='/category/opinion'>Opinion</Link>
          <Link className="p-2 text-muted" to='/category/science'>Science</Link>
          <Link className="p-2 text-muted" to='/category/health'>Health</Link>
          <Link className="p-2 text-muted" to='/category/style'>Style</Link>
          <Link className="p-2 text-muted" to='/category/travel'>Travel</Link>
      </nav>
  </div>

  <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">{featured.title}</h1>
          <p className="lead my-3">{featured.excerpt}</p>
          <p className="lead mb-0">
              <Link to={`/blog/${featured.slug}`} className="text-white font-weight-bold">
                  Continue reading...
              </Link>
          </p>
      </div>
  </div>

  {getBlogs()}
</div>
);
}

export default Blogs
