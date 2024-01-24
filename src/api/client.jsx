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
// axios.defaults.withCredentials = true;

// Create an Axios instance with a base URL and other configurations
const client = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("access");
  // If the access token is not available in memory, check for it in the cookies.
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

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
      // Token has expired, attempt to refresh it
      const refreshToken = localStorage.getItem("refresh");
      if (refreshToken) {
        // Send a refresh token request to the server
        try {
          const refreshResponse = axios.post("/refresh/", {
            refresh_token: refreshToken,
          });
          const newAccessToken = refreshResponse.data.access;
          const newRefreshToken = refreshResponse.data.refresh;

          // Update localStorage with the new tokens
          localStorage.setItem("token", newAccessToken);
          localStorage.setItem("refreshToken", newRefreshToken);

          // Retry the original request with the new access token
          return axiosInstance(error.config);
        } catch (error) {
          // Refresh token failed, log out the user
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          window.location.href = "/login";
        }
      } else {
        // No refresh token available, log out the user
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
      }
    } else {
      // Return the error response
      return Promise.reject(error);
    }
  }
);

export { client };
