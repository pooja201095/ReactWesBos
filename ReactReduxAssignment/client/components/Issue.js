import React from "react";
import { Link } from "react-router";

const Issue = React.createClass({
    handleClick(){
         const { post, i } = this.props;
         const username = this.props.params.username;
         const reponame = this.props.params.repoName;
        this.props.getComments(username, reponame, post.number);
          
    },
  render() {
       const { post, i } = this.props;
       const date= new Date(post.updated_at).toDateString();
    return <div className="w3-container">
        <Link to={`/${this.props.params.username}/${this.props.params.repoName}/issues/${post.number}`} onClick={this.handleClick}>
          <li className="w3-bar" key={i}>
            <Link to={`/${this.props.params.username}/${this.props.params.repoName}/issues/${post.number}`}>
              <span className="w3-bar-item w3-right">
                <button className="w3-button w3-white w3-border w3-border-blue w3-round-large">
                  {post.comments} <i className="fa fa-comments" />
                </button>
              </span>
            </Link>
            <span className="w3-bar-item w3-xxlarge">
              {post.state === "open" ? (
                <i className="fa fa-check-circle-o" />
              ) : (
                <i className="fa fa-times-circle-o" />
              )}
            </span>
            <div className="w3-bar-item">
              <span className="w3-large">{post.title}</span>
              <br />
              <span>
                #{post.number} opened on {date} by {post.user.login}
              </span>
            </div>
          </li>
        </Link>
      </div>;
  }
});

export default Issue;
