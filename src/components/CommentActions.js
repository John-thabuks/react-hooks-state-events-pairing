// CommentActions.js
import React from "react";

function CommentActions({ onUpvote, onDownvote }) {
  return (
    <div>
      <button onClick={onUpvote}>👍</button>
      <button onClick={onDownvote}>👎</button>
    </div>
  );
}

export default CommentActions;
