//reducer takes in 2 things

//1.the action (info of what happened)
//2.copy of current state

function postcomments(state = [], action) {
  console.log(state, action);
  switch (action.type) {
    case "ADD_COMMENT":
      return [...state, { user: action.author, text: action.comment }];
    case "FETCH_REQUEST":
      return null;
    case "FETCH_COMMENT_SUCCESS":
      return { ...state, comments: action.payload };
    case "FETCH_COMMENT_ERROR":
      return state;
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if (typeof action.postId !== "undefined") {
    return {
      //take the current state
      ...state,
      //overwirte the post with new one
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default postcomments;
