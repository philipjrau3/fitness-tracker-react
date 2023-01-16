import APIURL from "./auth";

export const getAllActivities = async () => {
  try {
    const response = await fetch(`${APIURL}activities`);
    const results = await response.json();
    return results;
  } catch (error) {
    console.error(error);
  }
};

export const createNewActivity = async (name, description) => {
  const token = window.localStorage.getItem("token");
  try {
    const response = await fetch(`${APIURL}activities`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
