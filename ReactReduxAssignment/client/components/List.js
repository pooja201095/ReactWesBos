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
    return <div className="w3-container">
        <ul className="w3-ul w3-card-4">
          <li className="w3-bar w3-light-grey">
            <div className="w3-bar-item">
              <span>Select State</span>
              <select id="issueState" name="issueState">
                <option value="all">All</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <div className="w3-bar-item">
              <span>Filter</span>
              <select id="issueSort" name="issueSort">
                <option value="created-desc">Newest</option>
                <option value="created-asc">Oldest</option>
                <option value="comments-desc">Most Commented</option>
                <option value="comments-asc">Least Commented</option>
              </select>
            </div>
            <div className="w3-bar-item">
            <button onClick={this.changeState}>Submit</button>
            </div>
            <div className="w3-bar-item w3-right">
              <span>
                {this.props.repoinfo &&
                  this.props.repoinfo.repoinfo &&
                  this.props.repoinfo.repoinfo.open_issues_count}{" "}
                open issues
              </span>
            </div>
          </li>
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
