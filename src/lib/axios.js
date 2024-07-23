import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
    Referer: "https://mobile-backend.netiaccess.com",
  },
  withCredentials: true,
  withXSRFToken: true,
});

export default axios;
