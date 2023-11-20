import React, { useCallback, useEffect, useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios"
import {
  CreatetBlog,
  getBlogAll,
  DeleteBlog,
  BlogUpdate,
  postLogout,
  SearchBlog
} from "../helper/FetchData";
import { Input } from 'reactstrap'
import { DeleteBlogCp } from "./DeleteBlog";
import {UpdateBlog} from "./UpdateBlog"
import { AddBlog } from "./AddBlog";
import { Logout } from "./helper/UrlHelper";
import { debounce, pickBy } from 'lodash';
// import {DeleteBlog,UpdateBlog} from "./helper/FetchData";
function Home() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  console.log(localStorage.getItem("jsonwebtoken"));
  const [inputValue, setInputValue] = useState('');
 
  useEffect(() => {
    getBlogAll().then((res) => {
        console.log(res);
      setBlogs(res.data);
    });
  }, []);
 
  const handleHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
//   const API_URL ="http://localhost:4000"
//   const axiosApi = axios.create({
//     baseURL: API_URL,
//   })
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("jsonwebtoken");
    // const test = delete axiosApi.defaults.headers.common["Authorization"]
    // console.log(test);
    console.log("deleteToken");
    navigate("/");
  };

  
  const handlePost = async () => {
    try { 
        const data = { name, content, description, rating };
        const checkaddblog = blogs.findIndex((blog) => blog.name === name);
      if (checkaddblog === -1) {
        if (!name || !content || !description || !rating || rating < 0 || rating > 5) {
          alert("Please provide complete information");
        }
        await CreatetBlog(data).then((res) => {
            console.log(res);
          setBlogs([res.data, ...blogs]);
          setName("");
          setContent("");
          setDescription("");
          setRating("");
        })
      } else {
        alert("This name already exists");
        setName("");
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  
  const handleDeleteBlog = (blogId) => {
    DeleteBlog(blogId).then((res) => {
        console.log(res);
        const updateblogs = blogs.filter((blog) => blog._id !== res.data._id);
        setBlogs(updateblogs);
    });
  };
  const handleUpdate = (blogId) => {
    const data = { name, content, description, rating };
    console.log(data);
    BlogUpdate(blogId,(data)).then(res=>{
        blogs.map((blog,index)=> {
            if(blog._id === res.data._id){
                 blogs[index] = res.data
                }
            setBlogs([...blogs])
        return blog
        })
    })
  };
//   const handleChange = (event) => {
//     let value = event.target.value.normalize('NFC')
//     setInputValue(value);
//     setValueDebounce.current(value);
// };
  return (
    <React.Fragment>
      <div>
        <div>
        <button type="submit" className="submitButton" onClick={handleHome}>
          Register
        </button>
        <button type="submit" className="submitButton" onClick={handleLogout}>
          Logout
        </button>
        <AddBlog 
                onAddBlog={handlePost}
                setName={setName}
                setContent={setContent}
                setDescription={setDescription}
                setRating={setRating}
                />
            <div className="search-box chat-search-box">
            {/* <div className="position-relative">
                <Input
                    onChange={handleChange}
                    type="text"
                    className="form-control bg-light border-light rounded"
                    placeholder="Tìm kiếm"
                    value={inputValue}
                />
                <i className="uil uil-search search-icon"></i>
            </div> */}
        </div>
            </div>
        <h2>Blog</h2>
        <div className="container">
          {blogs.map((blog) => (
            <div key={blog._id}>
                <li key={blog._id}>
                Name blog: {blog.name}
                <br/>
                - {blog.content}
                <br/>
            Rating: {blog.rating}
            </li>
              <div>
              <DeleteBlogCp post={blog} onDelete={handleDeleteBlog} />
              <UpdateBlog
                post={blog}
                onUpdate={handleUpdate}
                setName={setName}
                setContent={setContent}
                setDescription={setDescription}
                setRating={setRating}
              />
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;

