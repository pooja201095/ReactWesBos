import React from "react";
import { Link } from "react-router";

import Issue from './Issue';

const List = React.createClass({
  componentDidMount() {
    console.log("Here");  
    this.props.issueCount("facebook", "create-react-app");
    this.state = { pageNum: 1, issueState: "all", issueSort: "created-desc" }; 
    console.log("component did mount");
    this.props.fetchIssues("facebook", "create-react-app", this.state.pageNum, this.state.issueState, this.state.issueSort); 
  },
  changePage(e){
    console.log("ChangePage");
      e.currentTarget.id === "next" ? 
      this.setState({pageNum: ++this.state.pageNum}) : 
       this.state.pageNum>1 ?
      this.setState({ pageNum: --this.state.pageNum}) :
      this.setState({ pageNum: this.state.pageNum});
      this.props.fetchIssues("facebook", "create-react-app", this.state.pageNum, this.state.issueState, this.state.issueSort);
  },
  changeState(e){
    const issueState = document.getElementById("issueState").value;
    const issueSort = document.getElementById("issueSort").value;
    this.setState({ issueState: issueState,issueSort:issueSort });
    this.props.fetchIssues("facebook", "create-react-app", this.state.pageNum, issueState,issueSort);


  },
  render() {
    return <div>
        <p>Issue List page!</p>
        <div className="selectDropdowns">
          <h3>Select State</h3>
          <select id="issueState" name="issueState">
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
          <h3>Filter</h3>
          <select id="issueSort" name="issueSort">
            <option value="created-desc">Newest</option>
            <option value="created-asc">Oldest</option>
            <option value="comments-desc">Most Commented</option>
            <option value="comments-asc">Least Commented</option>
          </select>
          <button onClick={this.changeState}>Submit</button>
          <h2>
            {this.props.repoinfo && this.props.repoinfo.repoinfo && this.props.repoinfo.repoinfo.open_issues_count}
          </h2>
        </div>
        <ul>
          {this.props.posts.posts && this.props.posts.posts.map(
              (post, i) => {
                return <Issue {...this.props} key={i} i={i} post={post} />;
              }
            )}
        </ul>
        <div className="center">
          <div className="pagination">
            <button onClick={this.changePage} id="prev">
              &laquo;
            </button>
            <button>{this.state && this.state.pageNum}</button>
            <button onClick={this.changePage} id="next">
              &raquo;
            </button>
          </div>
        </div>
      </div>;
  }
});

export default List;
