import "./app.css";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Home.js'
import Login from './Login.js'
import Signup from './Signup.js'
import Register from "./register.js";
import ProtectedRoute from "./middleware/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/about" element={<Home/>}></Route> */}
      <Route path="/about" element={
      <ProtectedRoute>
        <Home/>
        </ProtectedRoute>
      }/>
      <Route path="/" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;