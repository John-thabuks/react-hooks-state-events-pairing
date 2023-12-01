// CommentSearch.js
import React, { useState } from "react";
import useCommentState from "./useCommentState";

function CommentSearch({ onSearch, initialComments }) {
  const { comments, handleRemove } = useCommentState(initialComments);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.user}: {comment.comment}</p>
          <button onClick={() => handleRemove(comment.id)}>Remove Comment</button>
        </div>
      ))}
    </div>
  );
}

export default CommentSearch;
