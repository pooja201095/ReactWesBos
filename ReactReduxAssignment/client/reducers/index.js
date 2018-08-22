import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import posts from "./posts";
import comments from './comments';
import repoinfo from "./repoinfo";


const rootReducer = combineReducers({
  posts,
  comments,
  repoinfo,
  routing: routerReducer
});

export default rootReducer;
