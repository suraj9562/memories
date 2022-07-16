import {
  createPost,
  deletePost,
  fetchAllProduct,
  getPost,
  likePost,
  updatePost,
} from "../api";

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

export const updatePostAction = (id, updatedPost) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_POST_REQUEST",
    });

    const response = await updatePost(id, updatedPost);

    dispatch({
      type: "UPDATE_POST_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "UPDATE_POST_FAIL",
      payload: error,
    });
  }
};

export const getPostAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_POST_REQUEST" });

    const response = await getPost(id);

    dispatch({
      type: "GET_POST_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "GET_POST_FAIL",
      payload: error,
    });
  }
};

export const deletePostAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_POST_REQUEST" });

    const response = await deletePost(id);

    dispatch({
      type: "DELETE_POST_SUCCESS",
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "DELETE_POST_FAIL",
      payload: error,
    });
  }
};
export const likePostAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "LIKE_POST_REQUEST" });

    const response = await likePost(id);

    dispatch({
      type: "LIKE_POST_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "LIKE_POST_FAIL",
      payload: error,
    });
  }
};
