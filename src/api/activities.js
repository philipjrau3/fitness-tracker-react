import React, { useEffect } from "react";
import APIURL from "./auth";

export const getAllActivities = async () => {
  try {
    const response = await fetch(`${APIURL}activities`);
    const results = await response.json();
    const activities = results.data;
    return activities;
  } catch (error) {
    console.error(error);
    // console.log(activities);
  }
};
