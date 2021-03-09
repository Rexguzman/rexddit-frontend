import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RegisterContainer, RegisterStyled } from './Register.styled';
import { Loading, DeleteAlert } from '../../components';

import { registerUser, deleteError } from '../../actions';

const Register = (props) => {
  const { registerUser, error, deleteError } = props;

  const [loading, setLoading] = useState(false);

  //----> Form logic
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(form.current);
    const registerForm = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    registerUser(registerForm, '/login');
  };

  //-----------> Redux Errors
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (error) {
      setLoading(false);
      setIsError(true);
    }
  }, [error]);

  const handleAcceptError = () => {
    setIsError(false);
    deleteError();
  };

  return (
    <RegisterContainer>
      {isError ? (
        <DeleteAlert isError={isError} handleAcceptError={handleAcceptError} />
      ) : null}
      <RegisterStyled>
        <h1>Registro</h1>
        <form ref={form}>
          <input name="name" type="text" placeholder="Nombre" required />
          <input
            className="email_input"
            name="email"
            type="text"
            placeholder="Correo"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            required
          />
          <button className="form_button" type="submit" onClick={handleSubmit}>
            {loading ? <Loading /> : 'Registrase'}
          </button>
        </form>
        <Link to="/login">
          <h4>¿Ya tienes cuenta?</h4>
        </Link>
      </RegisterStyled>
    </RegisterContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

const mapDispatchToProps = {
  registerUser,
  deleteError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
