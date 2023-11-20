import "./app.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUser, postSignup } from "./helper/FetchData";

function Signup() {
  const [listusers, setListUsers] = useState([]);
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
  const navigate = useNavigate();
  useEffect(() => {
    getAllUser().then((res) => {
      setListUsers(res.data);
    });
  }, []);
  const checkUserName = listusers.findIndex(user => user.username === username)
  const checkUserEmail = listusers.findIndex(user => user.email === email)
  const data = {username,email,password}
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(checkUserName === -1 && checkUserEmail === -1){
        if(username === "" || password === "" || email === ""){
          alert("Please provide complete information")
        }
        await postSignup(data).then((res)=>{
          setListUsers([...listusers,res])
      })
      alert("Signup success >>>");
      navigate("/login");
      }else{
        alert("Account or email already exists")
        setUsername('')
        setPassword('')
        setEmail('')
      }
    } catch (err) {
      console.log(err);
    }
    
  };
  const handleAbout = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <button type="submit" className="submitButton" onClick={handleAbout}>
        Back
      </button>
      <div className="login">
        <h3>Signup</h3>
        <form onSubmit={handleSubmit}>
        <input required type="text" placeholder="username" value={username}  onChange={e => {setUsername(e.target.value)}}/>
            <input required type="email" placeholder="email" value={email} onChange={e => {setEmail(e.target.value)}}/>
            <input required type="password" placeholder="password" value={password} onChange={e=>{setPassword(e.target.value)}}/>
            <button type="submit" >Register</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
