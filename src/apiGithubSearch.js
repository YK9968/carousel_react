import axios from "axios";

axios.defaults.baseURL = "https://api.github.com";

export const searchGitHubName = async (query) => {
  const response = await axios.get("/search/users", {
    params: { q: query },
  });
  return response.data.items;
};
