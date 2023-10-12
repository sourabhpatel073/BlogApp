import axios from "axios"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  let navigate=useNavigate()
  let url ="http://127.0.0.1:8080"; 
  function HandleSub(e) {
    e.preventDefault();
    if (!email && !password&&!username) {
      alert("please fill all filelds");
    }
  
         const userData={email,password,userName:username}
          axios.post(`${url}/user/signup`,userData).then((res)=>{
            console.log(res)
            
          })
          setEmail('')
    setPassword('')
    setUsername('')
   navigate("/login")
  }
  return (
    <div>
      <h3>Login</h3>

      <form
        onSubmit={HandleSub}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "5px",
          border: "2px solid ",
          width: "60%",
          margin: "auto",
        }}
      >
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default Signup;
