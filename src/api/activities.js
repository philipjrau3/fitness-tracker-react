import React, { useEffect } from "react";
import APIURL from "./auth";

export const getAllActivities = async () => {
  try {
    const response = await fetch(`${APIURL}activities`);
    // console.log(response);
    const results = await response.json();

    return results; //need to return an array of object
  } catch (error) {
    console.error(error);
    // console.log(activities);
  }
};

export const createNewActivity = async (name, description) => {
  const token = window.localStorage.getItem("token");
  try {
    const response = await fetch(`${APIURL}activities`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF=8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
    // console.log(data);
  } catch (error) {
    throw error;
  }
};
