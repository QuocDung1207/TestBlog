import React, { useCallback, useEffect, useState,useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getAllUser, postSignup } from "../helper/FetchData";

const  Register = () => {
    const [listusers, setListUsers] = useState([]);
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const navigate = useNavigate();
    // useEffect(() => {
    //     getAllUser().then((res) => {
    //       setListUsers(res);
    //     });
    //   }, []);
    console.log("123",listusers);
    const checkUsername = listusers.findIndex(user => user.username === username)
    const checkUserEmail = listusers.findIndex(user => user.email === email)
    console.log(checkUserEmail);
    console.log(checkUsername);
    const data = {username,email,password}
    console.log(data);
    console.log();
    const handleRegister = async (e) => {
        e.preventDefault();
        try{
          if(checkUsername === -1 && checkUserEmail === -1){
            if(username === "" || password === "" || email === ""){
              alert("Please provide complete information")
            }
            await postSignup(data).then((res)=>{
              console.log(res);
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
            
        }catch(err){
            console.log(err);
        }
    }
    // const handleAbout = (e) => {
    //   e.preventDefault();
    //   navigate("/");
    // };
  return (
    <div>
      {/* <button type="submit" className="submitButton" onClick={handleAbout}>
        Back
      </button> */}
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
            <input required type="text" placeholder="username" value={username}  onChange={e => {setUsername(e.target.value)}}/>
            <input required type="email" placeholder="email" value={email} onChange={e => {setEmail(e.target.value)}}/>
            <input required type="password" placeholder="password" value={password} onChange={e=>{setPassword(e.target.value)}}/>
            <button type="submit" >Register</button>
        </form>
    </div>
  )
}

export default Register
