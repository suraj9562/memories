import { createPost, fetchAllProduct } from "../api";

export const getPostsAction = () => async (dispatch) => {
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

export const createPostAction = (newPost) => async (dispatch) => {
  try {
    dispatch({
      type: "CREATE_POST_REQUEST",
    });

    const response = await createPost(newPost);

    dispatch({
      type: "CREATE_POST_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "CREATE_POST_FAIL",
      payload: error,
    });
  }
};
