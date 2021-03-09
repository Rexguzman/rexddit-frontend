import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { addCommentRequest } from '../../actions';

import { CommentInputContainer } from './CommentInput.styled';

const CommentInput = (props) => {
  const { user, addCommentRequest, id } = props;

  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const commentForm = {
      id: id,
      comment: formData.get('comment'),
      autor: user.name,
      autorImg: user.img,
    };
    addCommentRequest(commentForm);
  };

  return user.isLogged ? (
    <CommentInputContainer isLogged={user.isLogged}>
      <form ref={form}>
        <h4>Escribe un comentario: </h4>
        <textarea
          rows="8"
          className="input_description"
          name="comment"
          type="text"
          role="textbox"
          aria-multiline="true"
          placeholder="click aquí para empezar a escribir"
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Comentar
        </button>
      </form>
    </CommentInputContainer>
  ) : (
    <h4>Si deseas comentar debes inciar sesión 😁</h4>
  );
};

const mapDispatchToProps = {
  addCommentRequest,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);
