import React from "react";
import { Link } from "react-router";
import IssueInfo from './IssueInfo';

const IssueDescription = React.createClass({

  renderComments(comment,i) {
    const date = new Date(comment.created_at).toLocaleTimeString("en-US");
    console.log("RenderComments Called...!!!",comment,i);
    return (
 <div className="w3-panel w3-border w3-round-xlarge w3-light-grey" key={i}>
    <p><strong>{comment.user.login} commented at {date}</strong></p>
    <p>{comment.body}</p>
  </div>
    );
  },
  handleSubmit(e) {
    e.preventDefault();
    this.state={
      localcomment:this.state&&this.state.localcomment || []
    }
    const date= new Date();
    const user = this.refs.author.value;
    const body = this.refs.comment.value;
    const comment={
      user:{
        login:user,
      },
      body:body,
      created_at:date
    };
    this.setState({
      localcomment: this.state&&this.state.localcomment.concat(comment)
    });
    this.refs.commentForm.reset();
    
  },
  render() {
    return <div>
        <IssueInfo {...this.props} />
        <hr />
        <div className="w3-container">
          <h2>Comments</h2>
          {this.props.comments && this.props.comments.comments && this.props.comments.comments.map(this.renderComments)}
          {this.state && this.state.localcomment.map(this.renderComments)}
          <form ref="commentForm" className="w3-container" onSubmit={this.handleSubmit}>
            <p>
              <input className="w3-input" ref="author" type="text" />
              <label>Author</label>
            </p>
            <p>
              <input className="w3-input" ref="comment" type="text" />
              <label>Comment</label>
            </p>
            <p>
              <input type="submit" hidden />
            </p>
          </form>
        </div>
      </div>;
  }
});

export default IssueDescription;
