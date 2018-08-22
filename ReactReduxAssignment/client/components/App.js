import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import Main from "./Main";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments:state.comments,
    repoinfo:state.repoinfo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main); //surface the states and fuctions to the other components
//takes all the sates to props and functions to props and passes it to main

export default App;
