import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;

export const fetchAllProduct = async () => {
  return await axios.get(url);
};

export const createPost = async (newPost) => {
  return axios.post(url, newPost);
};
