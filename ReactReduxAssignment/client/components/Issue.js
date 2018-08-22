import React from "react";
import { Link } from "react-router";

const Issue = React.createClass({
    handleClick(){
         const { post, i } = this.props;
        console.log("Here comments");
        this.props.getComments("facebook", "create-react-app", post.number);
          
    },
  render() {
       const { post, i } = this.props;
    return <div>
        <Link to={`/view/${post.id}`} onClick={this.handleClick}>
          <li className="single-photo" key={i}>
            {post.state === "open"?<p>&#9745;</p>:<p>&#9746;</p>}
            {post.title}
            {post.number} {post.comments} {post.updated_at} {post.user.login}
            <Link className="button" to={`/view/${post.id}`}>
              <span className="comment-count">
                <span className="speech-bubble" />
                {post.comments}
              </span>
            </Link>
          </li>
        </Link>
      </div>;
  }
});

export default Issue;
