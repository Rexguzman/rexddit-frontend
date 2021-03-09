import React, { useEffect } from 'react';
import Comment from '../Comment/Comment';
import { CommentsContainer } from './comments.styled';

const Comments = ({ comments }) => {
  return (
    <CommentsContainer>
      <h3>Comentarios: </h3>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          autor={comment.autor}
          comment={comment.comment}
          autorImg={comment.autorImg}
        />
      ))}
    </CommentsContainer>
  );
};

export default Comments;
