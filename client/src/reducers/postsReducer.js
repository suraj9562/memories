export const getPostsReducer = (posts = [], action) => {
  switch (action.type) {
    case "ALL_PRODUCT_REQUEST":
      return {
        loading: true,
        posts: [],
      };

    case "CREATE_POST_REQUEST":
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

    case "CREATE_POST_FAIL":
      return {
        posts: posts.posts,
        errorInCreating: action.payload,
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
