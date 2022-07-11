const postsReducers = (posts = [], action) => {
  switch (action.type) {
    case "ALL_PRODUCT_REQUEST":
      return {
        loading: true,
        posts: [],
      };

    case "ALL_PRODUCT_REQUEST_SUCCESS":
      return {
        loading: false,
        posts: action.payload.data,
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

export default postsReducers;
