//reducer takes in 2 things

//1.the action (info of what happened)
//2.copy of current state

function repo(state = [], action) {
  console.log(state, action);
  switch (action.type) {
    case "FETCH_REPOS":
      return { ...state, repo: action.payload };
    case "FETCH_POSTS_ERROR":
      return state;
    default:
      return state;
  }
  return state;
}

export default repo;
