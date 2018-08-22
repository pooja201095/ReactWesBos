//reducer takes in 2 things

//1.the action (info of what happened)
//2.copy of current state

function repoinfo(state = [], action) {
  console.log(state, action);
  switch (action.type) {
    case "FETCH_REQUEST":
      return null;
    case "FETCH_SUCCESS":
      return { ...state, repoinfo: action.payload };
    case "FETCH_ERROR":
      return state;
    default:
      return state;
  }
  return state;
}

export default repoinfo;
