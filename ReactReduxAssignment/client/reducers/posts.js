//reducer takes in 2 things

//1.the action (info of what happened)
//2.copy of current state

function posts(state = [], action) {
  console.log(state,action);
  switch (action.type) {
    case "FETCH_REQUEST":
      return state;
    case "FETCH_POSTS_SUCCESS":
      console.log("Success");
      return { ...state, posts: action.payload };
    case "FETCH_POSTS_ERROR":
      console.log("Error");
      return state;
    default:
      return state;
  }
  return state;
}

export default posts;
