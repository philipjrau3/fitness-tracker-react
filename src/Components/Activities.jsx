import React, { useState } from "react";
import { Button } from "./Button";
import { createNewActivity } from "../api/activities";


export const AllActivities = ({activities, setActivities}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    
    return (
        <div className='activities'>
        <form>
            <label htmlFor="name">Activity Name:</label>
            <input
              value={name}
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label htmlFor="description">Description:</label>
            <input
              value={description}
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            ></input>
        </form>
        <Button
          action={async () => {
            const token = localStorage.getItem("token")
            const newActivity = await createNewActivity(name, description, token);
            setActivities([newActivity, activities]);
          }}
          content={'Create New Activity'}
        />

{activities ? activities.map(activity => {
  return (
    <div key={activity.id} className='activity'>
            <h3>Activity: {activity.name}</h3>
            <p>Description: <br></br>{activity.description}</p>
          </div>
        )}
      ) : (
        <h2>No Activities Found</h2>
      )}
    </div>
  );
};



