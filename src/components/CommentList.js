import React, { useState } from "react";
import CommentActions from "./CommentActions";
import CommentRemoval from "./CommentRemoval";
import CommentSearch from "./CommentSearch";
import useCommentState from "./useCommentState";

function CommentList({ comments }) {
  const { commentVotes, comments: commentsList, handleUpvote, handleDownvote, handleRemove } = useCommentState(comments);
  const [showComments, setShowComments] = useState(true);

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  const handleSearch = (searchTerm) => {
    const filtered = comments.filter((comment) =>
      comment.user.toLowerCase().includes(searchTerm.toLowerCase())
    );
    handleRemove(filtered.map(comment => comment.id));
  };

  return (
    <div>
      <button onClick={handleToggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      {showComments && (
        <div>
          <CommentSearch onSearch={handleSearch} initialComments={comments} />
          {commentsList.map((comment) => (
            <div key={comment.id}>
              <p>
                {comment.user}: {comment.comment}
              </p>
              <CommentActions
                onUpvote={() => handleUpvote(comment.id)}
                onDownvote={() => handleDownvote(comment.id)}
              />
              <CommentRemoval onRemove={() => handleRemove(comment.id)} />
              <p>
                Comment Votes: Upvotes - {commentVotes[comment.id].upvotes} | Downvotes -{" "}
                {commentVotes[comment.id].downvotes}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentList;
