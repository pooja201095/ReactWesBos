//add comments
export function addComment(issueId, author, comment) {
  return {
    type: "ADD_COMMENT",
    issueId,
    author,
    comment
  };
}

const API = "https://api.github.com/repos";

export function fetchRequest() {
  return {
    type: "FETCH_REQUEST"
  };
}

export function fetchPostsSuccess(payload) {
  return {
    type: "FETCH_POSTS_SUCCESS",
    payload
  };
}

export function fetchPostsError() {
  return {
    type: "FETCH_POSTS_ERROR"
  };
}

export function fetchCommentsSuccess(payload) {
  return {
    type: "FETCH_COMMENT_SUCCESS",
    payload
  };
}

export function fetchCommentsError() {
  return { type: "FETCH_COMMENT_ERROR" };
}

export function fetchSuccess(payload) {
  return {
    type: "FETCH_SUCCESS",
    payload
  };
}

export function fetchError() {
  return { type: "FETCH_ERROR" };
}

  export function fetchIssues(username, repoName, pageNumber, issueState,issueSort) {
    console.log('abc*********');
           return dispatch => {
             dispatch(fetchRequest());
             return fetchPosts(username, repoName, pageNumber, issueState, issueSort).then(
               ([response, json]) => {
                 if (response.status === 200) {
                   console.log("issues", json);
                   dispatch(fetchPostsSuccess(json));
                 } else {
                   dispatch(fetchPostsError());
                 }
               }
             );
           };
         }

//pagination 
function fetchPosts(username, repoName, pageNumber, issueState, issueSort) {
  const URL = `${API}/${username}/${repoName}/issues?page=${pageNumber}&state=${issueState}&sort=${issueSort}&per_page=10`;
  return fetch(URL).then(response => Promise.all([response, response.json()]));
}

export function getComments(username, repoName, issueNo) {
         console.log("GetComments Called!!");
         return dispatch => {
           dispatch(fetchRequest());
           return fetchComments(username, repoName, issueNo).then(
             ([response, json]) => {
               if (response.status === 200) {
                 console.log("comments", json);
                 dispatch(fetchCommentsSuccess(json));
               } else {
                 dispatch(fetchCommentsError());
               }
             }
           );
         };
       }

    function fetchComments(username, repoName,issueNo) {
      const URL = `${API}/${username}/${repoName}/issues/${issueNo}/comments`;
      return fetch(URL).then(response =>
        Promise.all([response, response.json()])
      );
    }

    export function issueCount(username, repoName) {
      return dispatch => {
        dispatch(fetchRequest());
        return fetchIssueCount(username, repoName).then(
          ([response, json]) => {
            if (response.status === 200) {
              console.log("repo info", json);
              dispatch(fetchSuccess(json));
            } else {
              dispatch(fetchError());
            }
          }
        );
      };
    }

    function fetchIssueCount(username, repoName) {
      const URL = `${API}/${username}/${repoName}`;
      return fetch(URL).then(response =>
        Promise.all([response, response.json()])
      );
    }
