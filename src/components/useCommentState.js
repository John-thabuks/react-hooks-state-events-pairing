import { useState } from "react";

function useCommentState(initialComments) {
  const [commentVotes, setCommentVotes] = useState(
    initialComments.reduce((votes, comment) => {
      votes[comment.id] = { upvotes: 0, downvotes: 0 };
      return votes;
    }, {})
  );

  const [comments, setComments] = useState(initialComments);

  const handleUpvote = (commentId) => {
    setCommentVotes((prevVotes) => ({
      ...prevVotes,
      [commentId]: {
        upvotes: prevVotes[commentId].upvotes + 1,
        downvotes: prevVotes[commentId].downvotes,
      },
    }));
  };

  const handleDownvote = (commentId) => {
    setCommentVotes((prevVotes) => ({
      ...prevVotes,
      [commentId]: {
        upvotes: prevVotes[commentId].upvotes,
        downvotes: prevVotes[commentId].downvotes + 1,
      },
    }));
  };

  const handleRemove = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);

    const updatedVotes = { ...commentVotes };
    delete updatedVotes[commentId];
    setCommentVotes(updatedVotes);
  };

  return {
    commentVotes,
    comments,
    handleUpvote,
    handleDownvote,
    handleRemove,
  };
}

export default useCommentState;
