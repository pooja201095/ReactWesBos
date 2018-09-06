import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import posts from "./posts";
import comments from './comments';
import repoinfo from "./repoinfo";
import repo from "./repo";
import slectedPost from "./slectedPost";



const rootReducer = combineReducers({
  posts,
  comments,
  repoinfo,
  repo,
  slectedPost,
  routing: routerReducer
});

export default rootReducer;
