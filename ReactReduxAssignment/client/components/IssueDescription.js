import React from "react";
import { Link } from "react-router";
import IssueInfo from './IssueInfo';

const IssueDescription = React.createClass({

  renderComments(comment,i) {
    console.log("RenderComments Called...!!!");
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user.login}</strong>;
          {comment.body}
        </p>
      </div>
    );
  },
  handleSubmit(e) {
    e.preventDefault();
    const postId = this.props.params.issueId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },
  render() {
    return <div>
    <IssueInfo {...this.props}/>
    <br/>
    <br/>
    <div className="comment">
        {this.props.comments && this.props.comments.comments && this.props.comments.comments.map(this.renderComments)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
      </div>;
  }
});

export default IssueDescription;
