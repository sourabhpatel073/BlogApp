import React, { useState } from "react";
import axios from "axios"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let url = process.env.url;
  function HandleSub(e) {
    e.preventDefault();
    if (!email && !password) {
      alert("please fill all filelds");
    }
    const userData = { email, password };
    axios
      .post(`${url}/user/login`, userData)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
      });
    setEmail("");
    setPassword("");
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
          width: "45%",
          margin: "auto",
        }}
      >
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

export default Login;
