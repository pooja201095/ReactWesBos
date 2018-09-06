function slectedPost(state = [], action) {
  console.log(state, action);
  switch (action.type) {
    case "FETCH_SLE_ISSUE":
      return { ...state, slectedPost: action.payload };
    default:
      return state;
  }
  return state;
}

export default slectedPost;