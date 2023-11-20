import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteUser, getAllUser } from "./helper/FetchData";
import { DeleteBlogCp } from "./DeleteBlog";

export default function Register() {
  const navigate = useNavigate();
  const [listusers, setListUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((res) => {})
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    getAllUser().then((res) => {
      setListUsers(res.data);
    });
  }, []);

  const gettoken = localStorage.getItem("jsonwebtoken");
  const handleLogin = (e) => {
    e.preventDefault();
    if (gettoken) {
      alert("Bạn đang đăng nhập");
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  const handleSignup = (e) => {
    e.preventDefault();
    const gettoken = localStorage.getItem("jsonwebtoken");
    if (gettoken) {
      alert("Bạn đang đăng nhập");
      navigate("/");
    } else {
      navigate("/signup");
    }
  };
  const handleHome = (e) => {
    e.preventDefault();
    if (gettoken) {
      navigate("/about");
    } else {
      alert("Tài khoản cần đăng nhập !!");
      navigate("/login");
    }
  };
  const handleDeleteBlog = (id) => {
    DeleteUser(id).then((res) => {
      const update = listusers.filter((user) => user._id !== res.data._id);
      setListUsers(update);
    });
  };
  return (
    <React.Fragment>
      <div>
        <div>
          <button type="submit" className="submitButton" onClick={handleHome}>
            Home
          </button>
          <button type="submit" className="submitButton" onClick={handleLogin}>
            Login
          </button>
          <button type="submit" className="submitButton" onClick={handleSignup}>
            Signup
          </button>
        </div>
        <div className="container">
          <p>Account:</p>
          {listusers.map((user) => (
            <div key={user._id}>
              <div>
                <li key={user._id}>{user.username}</li>
              </div>
              <div>
                <DeleteBlogCp post={user} onDelete={handleDeleteBlog} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
