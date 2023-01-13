import React from "react";
const APIURL = `https://fitnesstrac-kr.herokuapp.com/api/`;

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}users/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    // return data;
  } catch (error) {
    console.error(error);
  }
};

export const loggedInUser = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const { token } = await response.json();
    console.log(token);
    return token;
  } catch (error) {
    console.error(error);
  }
};

// export const fetchMe = async (token) => {
//   try {
//     const response = await fetch(`${APIURL}users/me`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const { data } = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };
export default APIURL;
