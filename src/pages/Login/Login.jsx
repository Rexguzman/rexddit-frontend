import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { loginUser, deleteError } from '../../actions';

import { Link } from 'react-router-dom';
import { LoginContainer, LoginStyled } from './Login.styled';

import { Loading, DeleteAlert } from '../../components';

const Login = (props) => {
  const { loginUser, error, deleteError } = props;

  const [loading, setLoading] = useState(false);

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

  //----> Form logic
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(form.current);
    const loginForm = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    loginUser(loginForm, '/');
  };

  return (
    <LoginContainer>
      {isError ? (
        <DeleteAlert isError={isError} handleAcceptError={handleAcceptError} />
      ) : null}
      <LoginStyled>
        <h1>Iniciar sesión</h1>
        <form ref={form} className="login_form">
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
            {loading ? <Loading /> : 'Iniciar sesión'}
          </button>
        </form>
        <p>¿Has olvidado la contraseña?</p>
        <hr />
        <Link to="/register">
          <button className="register_button">Registrarse</button>
        </Link>
      </LoginStyled>
    </LoginContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

const mapDispatchToProps = {
  loginUser,
  deleteError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
