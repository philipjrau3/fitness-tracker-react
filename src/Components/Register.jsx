import React, { useState } from "react";
import { registerUser } from "../api/auth";

const Register = ({setLoggedIn}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
      <div>
        <form
          onSubmit={async (e) => {
            try {
              e.preventDefault();
              console.log ("username/password ", username, password);
              const token = await registerUser(username, password);
              
              // if (token) {
                // setLoggedIn(true);
                localStorage.setItem("token", token.token);
                // console.log("working?", token);
              // }
            } catch (error) {
              console.error(error);
            }
          }}
        >
          <label htmlFor="username">New User:</label>
          <input
            value={username}
            type="text"
            placeholder="New User"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label htmlFor="password">Password :</label>
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };
  
  export default Register;