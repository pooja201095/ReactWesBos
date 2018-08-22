import React,{Component} from "react";

class IssueInfo extends Component{
  componentWillMount() {
    let currentPost = this.props.posts.posts.filter(post => {
      return post.id == this.props.params.issueId;
    });
    currentPost = currentPost[0];
    console.log("Issue Info", currentPost);
    this.state = { currentPost };
  }
  render() {
    const currentPost = this.state.currentPost;
    const date = new Date(currentPost.created_at).toDateString();
    return (
      <div>
        <h2>{currentPost.title}</h2>
        <h2>#{currentPost.number}</h2>
        <h2>{currentPost.state}</h2>
        <h2>{currentPost.user.login}</h2>
        <h2>{date}</h2>
        <h2>{currentPost.comments} comments</h2>
        <br />
        <br />
        <br />
        <hr />
        <p>{currentPost.body}</p>
      </div>
    );
  }
};

export default IssueInfo;
