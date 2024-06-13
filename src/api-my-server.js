import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const fetchMyServer = async () => {
  const response = await axios.get("/contacts");
  return response.data;
};
