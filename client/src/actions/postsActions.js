import { fetchAllProduct } from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: "ALL_PRODUCT_REQUEST",
    });

    const response = await fetchAllProduct();

    dispatch({
      type: "ALL_PRODUCT_REQUEST_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "ALL_PRODUCT_REQUEST_FAIL",
      payload: error,
    });
  }
};
