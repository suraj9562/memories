import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;

export const fetchAllProduct = async () => {
  return await axios.get(url);
};

export const createPost = async (newPost) => {
  return axios.post(url, newPost);
};

export const getPost = async (id) => {
  return axios.get(`${url}/${id}`);
};

export const updatePost = async (id, updatedData) => {
  return axios.patch(`${url}/${id}`, updatedData);
};


