import React, { useEffect } from "react";
import APIURL from "./auth";

export const getAllRoutines = async () => {
  try {
    const response = await fetch(`${APIURL}routines`);
    const results = await response.json();
    const routines = results.data;
    return routines;
  } catch (error) {
    console.error(error);
    // console.log(activities);
  }
};
