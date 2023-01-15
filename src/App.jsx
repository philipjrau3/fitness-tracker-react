import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Heading from "./Components/Heading"; 
import { getAllActivities } from "./api/activities";
import { deleteRoutine } from "./api/routines";
import { AllActivities } from "./Components/Activities";
import { AllRoutines } from "./Components/Routines";
import { MyRoutines } from "./Components/MyRoutines";
import { fetchMe } from "./api/auth";
import Register from "./Components/Register";
import LogIn from "./Components/LogIn";
import { Home } from "./Components/Home";
import { getAllRoutines, getMyRoutines } from "./api/routines";


const App = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token") ? true : false) 
  const [token, setToken] = useState (localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState ([]);
  const [myRoutines, setMyRoutines] = useState([]);
  const [routineDelete, setRoutineDelete] = useState({});

  const username = user.username;

  useEffect(()=> {
    const fetchActivities = async () => {
      const activity = await getAllActivities();
      setActivities(activity)
    }
    fetchActivities();
  },
  []
  );

  useEffect(()=> {
    const fetchRoutines = async () => {
      const routines = await getAllRoutines();
      setRoutines(routines)
    }
    fetchRoutines();
  }, []
  );

  useEffect(()=> {
    const fetchMyRoutines = async () => {
      const myRoutines = await getMyRoutines(username, token);
      setMyRoutines(myRoutines)
    };
    if (user.username) {
    fetchMyRoutines();
    }
  }, [user.username]
  );

useEffect (()=> {
  const newSetOfRoutines = async () => {
    await deleteRoutine(routineDelete, token)
  } 
  if (routineDelete.id){
    newSetOfRoutines();
  }
}, [routineDelete]
);

  useEffect(() => {
    
    const getMe = async () => {
      // const token = localStorage.getItem('token');
      const data = await fetchMe(token);
      setUser(data);
      console.log("data", data);
    };
    if (token) {
      getMe();
    }
    console.log(user);
  }, [token]);

  return <div>
 
    <div className="App">
      <Heading />
      <Routes>
          <Route path="AllRoutines" element={<AllRoutines routines={routines} setRoutines={setRoutines}/>}></Route>
          <Route path="MyRoutines" element={<MyRoutines routines={routines} myRoutines={myRoutines} setRoutineDelete={setRoutineDelete} setRoutines={setRoutines} setMyRoutines={setMyRoutines}/>}></Route>
          <Route path="AllActivities" element={<AllActivities activities={activities} setActivities={setActivities}/>}></Route> 
          <Route path="Register" element={<Register setLoggedIn={setLoggedIn}/>}></Route>
          <Route path="LogIn" element={<LogIn setLoggedIn={setLoggedIn}/>}></Route>
          <Route path="/" element={<Home/>}></Route> 
      </Routes> 
    </div>

</div>

}

export default App;
