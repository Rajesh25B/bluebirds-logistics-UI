import axios from "axios";

function getAccessToken() {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "access_token") {
      return value;
    }
  }
  return null;
}

function getRefreshToken() {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "refresh_token") {
      return value;
    }
  }
  return null;
}

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

// Create an Axios instance with a base URL and other configurations
const client = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(async (config) => {
  const accessToken = getAccessToken();
  // If the access token is not available in memory, check for it in the cookies.
  if (!accessToken) {
    const accessTokenCookie = document.cookie.match(/accessToken=([^;]+)/);
    if (accessTokenCookie) {
      accessToken = accessTokenCookie[1];
    }
  }
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

async function refreshAccessToken() {
  const refreshToken =
    getRefreshToken(); /* Get the refresh token from your cookies or storage */
  console.log(refreshToken);
  try {
    const response = await client.post("/token/refresh/", {
      refresh: refreshToken,
    });
    console.log(response);
    const newAccessToken = response.data.access;
    // Update the access token in your cookies or storage
    // For example, you can use the same `document.cookie` approach
    document.cookie = `access_token=${newAccessToken};`;
    return newAccessToken;
  } catch (error) {
    // Handle the error when refresh fails
    throw error;
  }
}

client.interceptors.response.use(
  async (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      // Token expired, try to refresh the access token
      try {
        const newAccessToken = await refreshAccessToken();
        // Retry the failed request with the new access token
        const originalRequest = error.config;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return client(originalRequest);
      } catch (refreshError) {
        // Handle the error when refresh fails
        // For example, you can redirect the user to the login page
        // console.error("Refresh failed:", refreshError);
        console.log(refreshError);
        // Handle the error or redirect to the login page
      }
    }
    // Handle other errors here
    throw error; // Rethrow the error for further handling
  }
);

export { client };
