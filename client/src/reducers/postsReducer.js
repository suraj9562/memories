export const getPostsReducer = (posts = [], action) => {
  switch (action.type) {
    case "ALL_PRODUCT_REQUEST":
      return {
        loading: true,
        posts: [],
      };

    case "UPDATE_POST_REQUEST":
    case "GET_POST_REQUEST":
    case "CREATE_POST_REQUEST":
    case "DELETE_POST_REQUEST":
    case "LIKE_POST_REQUEST":
      return {
        posts: posts.posts,
      };

    case "ALL_PRODUCT_REQUEST_SUCCESS":
      return {
        loading: false,
        posts: action.payload.data.posts,
      };

    case "CREATE_POST_SUCCESS":
      return {
        loading: false,
        posts: [...posts.posts, action.payload.data.newPost],
        newPost: action.payload.data.newPost,
      };

    case "GET_POST_SUCCESS":
      return {
        ...posts,
        fetchedPost: action.payload.data.post,
      };

    case "UPDATE_POST_SUCCESS":
      return {
        ...posts,
        updatedPost: action.payload.data,
      };

    case "DELETE_POST_SUCCESS":
      return {
        posts: posts.posts.filter((post) => post._id !== action.payload._id),
      };

    case "LIKE_POST_SUCCESS":
      return {
        posts: posts.posts.map((post) =>
          post._id === action.payload.data.updatedPost._id
            ? action.payload.data.updatedPost
            : post
        ),
      };

    case "CREATE_POST_FAIL":
      return {
        posts: posts.posts,
        errorInCreating: action.payload,
      };

    case "GET_POST_FAIL":
      return {
        posts: posts.posts,
        errorInFetchIng: action.payload,
      };

    case "UPDATE_POST_FAIL":
    case "LIKE_POST_FAIL":
      return {
        posts: posts.posts,
        errorInUpdating: action.payload,
      };

    case "DELETE_POST_FAIL":
      return {
        posts: posts.posts,
        errorInUpdating: action.payload,
      };

    case "ALL_PRODUCT_REQUEST_FAIL":
      return {
        loading: false,
        posts: action.payload.data,
      };

    default:
      return posts;
  }
};
