import "./app.css";
import { useState } from "react";
import { postLogin } from "./helper/FetchData";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await postLogin(username, password);
      if (res.data.access_token) {
        const token = res.data.access_token;
        localStorage.setItem("jsonwebtoken", token);
        navigate("/about");
        navigate(0);
      }
    } catch (err) {
      console.log(err);
      alert("wrong account ot password")
      setUsername("")
      setPassword("")
      
    }
  };

  const handleAbout = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleSgnup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div className="container">
      <button type="submit" className="submitButton" onClick={handleAbout}>
        Back
      </button>
      <button type="submit" className="submitButton" onClick={handleSgnup}>
        Signup
      </button>

      <div className="login">
        <form onSubmit={handleSubmit}>
          <span className="formTitle">Login</span>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit" className="submitButton">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
