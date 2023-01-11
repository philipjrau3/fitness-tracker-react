import React, { useState } from "react";
import { loggedInUser } from "../api/auth";

const LogIn = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    return (
        <div>
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            console.log(password, username);
            const token = await loggedInUser(username, password);
            setLoggedIn(true);
            localStorage.setItem("token", token);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <label htmlFor="username">Returning User:</label>
        <input
          value={username}
          type="text"
          placeholder="Previous User"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label htmlFor="password">Password :</label>
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign In</button>
      </form>
    </div>
    )
}

export default LogIn;