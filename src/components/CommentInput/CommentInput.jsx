import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { addCommentRequest } from '../../actions';

import { CommentInputContainer } from './CommentInput.styled';

const CommentInput = (props) => {
  const { user, addCommentRequest, id } = props;

  const [form, setValues] = useState({
    id: id,
    comment: '',
    autor: user.name,
    autorImg: user.img,
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCommentRequest(form);
    setValues({
      id: id,
      comment: '',
      autor: user.name,
      autorImg: user.img,
    });
  };

  return user.isLogged ? (
    <CommentInputContainer isLogged={user.isLogged}>
      <form onSubmit={handleSubmit}>
        <h4>Escribe un comentario: </h4>
        <textarea
          id="comment"
          rows="8"
          className="input_description"
          name="comment"
          type="text"
          role="textbox"
          onChange={handleInput}
          aria-multiline="true"
          placeholder="click aquí para empezar a escribir"
          required
        />
        <button type="submit">Comentar</button>
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
