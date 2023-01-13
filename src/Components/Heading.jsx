import React from "react";
import './Heading.css';
import { Link } from "react-router-dom";

const Heading = ({ user }) => {

    return (
      <header>
        <h1>
          Welcome {user?.username} to Fitness Tracker!
        </h1>
        <div>
        <Link to="/">Home<br></br></Link>
        Already a member? <Link to="/login">Sign In<br></br></Link>
        New user? <Link to="/register">Sign Up<br></br></Link>
        Routines <Link to="/routines">See All Routines<br></br></Link>
        Activities <Link to="/AllActivities">See All Activities</Link>
    </div>
      </header>
    );  
};

export default Heading;