import React, { useState } from "react";
import { Button } from "./Button";
import { createNewRoutine, deleteRoutine } from "../api/routines";



export const MyRoutines = ({myRoutines, setMyRoutines, routines, setRoutines, setRoutineDelete}) => {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    
    const redirMyRoutines = () => {
        window.location.href = "/MyRoutines";
      };


    const handleLogout = () => {
      setToken(null);
      localStorage.removeItem("token");
    };

  return (
    <div>
    <div>
        
        <div className='routines'>
                  <button className="logoutbutton" onClick={handleLogout}>
                      Log Out
                    </button>
                <form>
                    <label htmlFor="name">Routine Name:</label>
                    <input
                      value={name}
                      type="text"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                    <label htmlFor="goal">Goal:</label>
                    <input
                      value={goal}
                      type="text"
                      placeholder="Goal"
                      onChange={(e) => setGoal(e.target.value)}
                    ></input>
                </form>
                <Button
                  action={async () => {
                    
                    const newRoutine = await createNewRoutine(name, goal);
                    setRoutines([newRoutine, ...routines]);
                    redirMyRoutines();
                  }}
                  content={'Create New Routine'}
                />
                
                </div>
                </div>
<div>
{ myRoutines.map(routine => {
  return (
    <div key={routine.id} className='routine'>
            <h3>Routine Name: {routine.name}</h3>
            <p>Goal: <br></br>{routine.goal}</p>
            <button onClick={setRoutineDelete(routine)}>Delete Routine</button>
<div>
{ routine.activities.map(activity => {
  return (
    <div key={activity.id} className='activity'>
            <h3>Activity Name: {activity.name}</h3>
            <p>Description: <br></br>{activity.description}</p>
            <p>Count: <br></br>{activity.count}</p>
            <p>Duration: <br></br>{activity.duration}</p>
</div>
        )}
      ) 
      }
    </div>
          </div>
        )}
      ) 
      }

    </div>
    </div>
    )};
// 

// 