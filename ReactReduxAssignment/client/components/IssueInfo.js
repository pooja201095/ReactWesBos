import React,{Component} from "react";

class IssueInfo extends Component{
  componentWillMount() {
    const username = this.props.params.username;
    const reponame = this.props.params.repoName;
    const issueNo = this.props.params.issueNumber;
    fetch(`https://api.github.com/repos/${username}/${reponame}/issues/${issueNo}`)
      .then(response => response.json())
      .then(response => this.props.fetchselectedissue(response));

  }
  render() {
    const currentPost = this.props && this.props.slectedPost && this.props.slectedPost.slectedPost;
    //const date = new Date(currentPost.created_at).toDateString();
    return <div className="w3-container">
        <div className="w3-container w3-card-2 w3-round-xlarge">
          <div className="w3-bar-item w3-margin">
            <span className="w3-xlarge">
              {currentPost.title} <span className="w3-text-grey">
                #{currentPost.number}
              </span>
            </span>
            <br />
            <span>
              <button className="w3-button w3-light-green w3-round w3-tiny">
                <i className="fa fa-exclamation" />
                &nbsp;
                {currentPost.state}
              </button>
              &nbsp;
              <b className="w3-text-dark-grey">{currentPost.user.login}</b>
              &nbsp;opened this issue on {new Date(currentPost.created_at).toDateString()}
              &nbsp;|
              {currentPost.comments} Comments
            </span>
          </div>
        </div>
        <br />
        <div className="w3-container w3-round-xlarge w3-card-2">
          <div className="w3-margin">
            <p className="w3-large">
              <b>Description</b>
            </p>
            <p>{currentPost.body}</p>
          </div>
        </div>
      </div>;
  }
};

export default IssueInfo;
