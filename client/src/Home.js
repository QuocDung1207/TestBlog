import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreatetBlog,
  getBlogAll,
  DeleteBlog,
  BlogUpdate,
} from "./helper/FetchData";
import { DeleteBlogCp } from "./DeleteBlog";
import { UpdateBlog } from "./UpdateBlog";
import { AddBlog } from "./AddBlog";
import CommentList from "./Comments";
// import {DeleteBlog,UpdateBlog} from "./helper/FetchData";
function Home() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    getBlogAll().then((res) => {
      console.log(res.data);
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
    navigate("/");
  };

  const handlePost = async () => {
    try {
      const data = { title, desc, date };
      const checkaddblog = blogs.findIndex((blog) => blog.title === title);
      if (checkaddblog === -1) {
        if (!title || !desc || !date) {
          alert("Please provide complete information");
        }
        await CreatetBlog(data).then((res) => {
          setBlogs([res.data, ...blogs]);
          setTitle("");
          setDesc("");
          setDate("");
        });
      } else {
        alert("This name already exists");
        setTitle("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteBlog = (blogId) => {
    DeleteBlog(blogId).then((res) => {
      if (res.data === 1) {
        const updateblogs = blogs.filter((blog) => blog.id !== blogId);
        setBlogs(updateblogs);
      }
    });
  };
  const handleUpdate = (blogId) => {
    console.log(blogId);
    const data = { title, desc, date };
    BlogUpdate(blogId, data).then((res) => {
      blogs.map((blog, index) => {
        if (blog.id === blogId) {
          blogs[index] = data;
        }
        setBlogs([...blogs]);
        return blog;
      });
    });
  };
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
            setTitle={setTitle}
            setDesc={setDesc}
            setDate={setDate}
          />
          <div className="search-box chat-search-box"></div>
        </div>
        <h2>Blog</h2>
        <div>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <div >
            <li>
              {blog.title}
              <ul>{blog.comment}</ul>
              <br />
              <UpdateBlog
                post={blog}
                onUpdate={handleUpdate}
                setTitle={setTitle}
                setDesc={setDesc}
                setDate={setDate}
              />
              <DeleteBlogCp post={blog} onDelete={handleDeleteBlog} />
              <CommentList blogId = {blog.id}/>
            </li>
          </div>
        
          </div>
          ))}
        </div>

        {/* <div className="container">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <div>
              <li key={blog.id}>
                Name blog: {blog.title}
                <br/>
                - {blog.comments}
                <br/>
                <UpdateBlog
                post={blog}
                onUpdate={handleUpdate}
                setTitle={setTitle}
                setDesc={setDesc}
                setDate={setDate}
              />
              
              </li>
              </div>
                
              <div>
              <DeleteBlogCp post={blog} onDelete={handleDeleteBlog} />
              <CommentList blogId = {blog.id}/>
              
              </div>
              
            </div>
          ))}
        </div> */}
      </div>
    </React.Fragment>
  );
}
export default Home;
