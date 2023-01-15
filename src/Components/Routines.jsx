import React, { useState } from "react";
import { Button } from "./Button";
import { createNewRoutine } from "../api/routines";


export const AllRoutines = ({routines, setRoutines}) => {
  
    return (
   

<div>
{ routines.map(routine => {
  return (
    <div key={routine.id} className='routine'>
            <h3>Routine Name: {routine.name}</h3>
            <p>Goal: <br></br>{routine.goal}</p>

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
  );
};



