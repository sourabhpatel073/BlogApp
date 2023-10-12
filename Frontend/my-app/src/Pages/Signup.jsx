import axios from "axios"
import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  let url = process.env.url;
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
          type="password"
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
