import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;

export const fetchAllProduct = async () => {
  return await axios.get(url);
};
