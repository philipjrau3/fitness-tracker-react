import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Heading from "./Components/Heading"; 
import { getAllActivities } from "./api/activities";
import { fetchMe } from "./api/auth";
import Register from "./Components/Register";
import LogIn from "./Components/LogIn";


const App = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token") ? true : false) 
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   console.log(loggedIn)
  //   const getMe = async () => {
  //     const token = localStorage.getItem('token');
  //     const data = await fetchMe(token);
  //     setUser(data);
  //     console.log("data", data);
  //   };
  //   if (loggedIn) {
  //     getMe();
  //   }
  //   console.log(user);
  // }, [loggedIn]);

  return <div>
  <>
    <div className="App">
      <Heading />
      <Routes>
          <Route path="Activities" element={<getAllActivities />}></Route>
          <Route path="Register" element={<Register setLoggedIn={setLoggedIn}/>}></Route>
          <Route path="LogIn" element={<LogIn setLoggedIn={setLoggedIn}/>}></Route>
        </Routes> 
    </div>
  </>
</div>

}

export default App;
