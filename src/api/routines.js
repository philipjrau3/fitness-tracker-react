import React, { useEffect } from "react";
import APIURL from "./auth";

export const getAllRoutines = async () => {
  try {
    const response = await fetch(`${APIURL}routines`);
    const results = await response.json();
    return results;
  } catch (error) {
    console.error(error);
    // console.log(activities);
  }
};

export const getMyRoutines = async (username, token) => {
  try {
    const response = await fetch(`${APIURL}users/${username}/routines`, {
      headers: {
        "Content-type": "application/json; charset=UTF=8",
        Authorization: `Bearer ${token}`,
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.error(error);
  }
};

export const createNewRoutine = async (name, goal) => {
  const token = window.localStorage.getItem("token");
  try {
    const response = await fetch(`${APIURL}routines`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteRoutine = async (routineDelete, token) => {
  try {
    const response = await fetch(`${APIURL}routines/${routineDelete.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
