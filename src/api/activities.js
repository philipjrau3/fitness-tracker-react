import React, { useEffect } from "react";
import APIURL from "./auth";

export const getAllActivities = async () => {
  try {
    const response = await fetch(`${APIURL}activities`);
    // console.log(response);
    const results = await response.json();
    const activities = results.activities;
    return activities;
  } catch (error) {
    console.error(error);
    // console.log(activities);
  }
};

export const createNewActivity = async (name, description) => {
  try {
    const response = await fetch(`${APIURL}activities`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF=8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        activity: {
          name: name,
          description: description,
        },
      }),
    });
    const data = await response.json();
    return data;
    // console.log(data);
  } catch (error) {
    throw error;
  }
};
