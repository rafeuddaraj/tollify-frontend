"use server";

const BASE_API_URL = process.env.BASE_API_URL;

export const loginAction = async ({ email = "", password = "" }) => {
  try {
    const res = await fetch(`${BASE_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (data.success) {
      return data;
    }
    throw new Error("");
  } catch {
    return null;
  }
};
export const registerAction = async ({
  email = "",
  password = "",
  phoneNumber = "",
  name = "",
}) => {
  try {
    const res = await fetch(`${BASE_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password, phoneNumber, name }),
    });
    const data = await res.json();

    if (data.success) {
      return data;
    }
    throw new Error("");
  } catch {
    return null;
  }
};
