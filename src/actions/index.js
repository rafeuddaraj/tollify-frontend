"use server";

import { auth } from "@/auth";

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

export const getAllVehicle = async () => {
  const session = await auth();
  try {
    const res = await fetch(`${BASE_API_URL}/vehicle`, {
      method: "GET",
      headers: {
        authorization: `Berar ${session.user.accessToken}`,
        "content-type": "application/json",
      },
    });
    const vehicles = await res.json();
    if (vehicles.success) {
      return vehicles.data;
    }
    throw Error("");
  } catch {
    return [];
  }
};
export const getSingleVehicle = async (id) => {
  const session = await auth();
  try {
    const res = await fetch(`${BASE_API_URL}/vehicle/${id}`, {
      method: "GET",
      headers: {
        authorization: `Berar ${session.user.accessToken}`,
        "content-type": "application/json",
      },
    });
    const vehicles = await res.json();
    if (vehicles.success) {
      return vehicles.data;
    }
    throw Error("");
  } catch {
    return {};
  }
};

export const vehicleRegister = async ({
  ownerId = "",
  licensePlate = "",
  model = "",
}) => {
  try {
    const session = await auth();
    const res = await fetch(`${BASE_API_URL}/vehicle/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Berar ${session?.user?.accessToken}`,
      },
      body: JSON.stringify({
        ownerId: ownerId || session?.user?.id,
        licensePlate,
        model,
      }),
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

export const getAllUser = async () => {
  const session = await auth();
  try {
    const res = await fetch(`${BASE_API_URL}/user`, {
      method: "GET",
      headers: {
        authorization: `Berar ${session.user.accessToken}`,
        "content-type": "application/json",
      },
    });
    const vehicles = await res.json();
    if (vehicles.success) {
      return vehicles.data;
    }
    throw Error("");
  } catch {
    return [];
  }
};
export const getSingleUser = async (id) => {
  const session = await auth();
  try {
    const res = await fetch(`${BASE_API_URL}/user/${id || session?.user?.id}`, {
      method: "GET",
      headers: {
        authorization: `Berar ${session.user.accessToken}`,
        "content-type": "application/json",
      },
    });
    const vehicles = await res.json();
    if (vehicles.success) {
      return vehicles.data;
    }
    throw Error("");
  } catch {
    return {};
  }
};

export const RfidScan = async ({
  rfidTag = "",
  amount = "",
  tollLocation = "",
}) => {
  try {
    const session = await auth();
    const res = await fetch(`${BASE_API_URL}/toll/rfid-scan`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Berar ${session?.user?.accessToken}`,
      },
      body: JSON.stringify({ tollLocation, amount, rfidTag }),
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
export const buyCreditAction = async ({
  amount = "",
  transactionType = "Uddaraj Pay",
}) => {
  try {
    const session = await auth();
    const res = await fetch(`${BASE_API_URL}/credit/buy`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Berar ${session?.user?.accessToken}`,
      },
      body: JSON.stringify({ amount, transactionType }),
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

export const getTransactionByUser = async () => {
  const session = await auth();
  try {
    const res = await fetch(`${BASE_API_URL}/transaction`, {
      method: "GET",
      headers: {
        authorization: `Berar ${session.user.accessToken}`,
        "content-type": "application/json",
      },
    });
    const vehicles = await res.json();
    if (vehicles.success) {
      return vehicles.data;
    }
    throw Error("");
  } catch {
    return [];
  }
};
export const getTransactionByUserAndVehicle = async (id) => {
  const session = await auth();
  try {
    const res = await fetch(`${BASE_API_URL}/transaction/${id}`, {
      method: "GET",
      headers: {
        authorization: `Berar ${session.user.accessToken}`,
        "content-type": "application/json",
      },
    });
    const vehicles = await res.json();
    if (vehicles.success) {
      return vehicles.data;
    }
    throw Error("");
  } catch {
    return [];
  }
};
