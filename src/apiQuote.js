import axios from "axios";

export const fetchApiQuto = async () => {
  const response = await axios.get("https://type.fit/api/quotes");
  return response.data;
};
