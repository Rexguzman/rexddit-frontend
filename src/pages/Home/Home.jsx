import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Channels } from '../../components';
import { ButtonContainer, HomeContainer } from './Home.styled';

import { channelsRequest } from '../../actions';

const Home = (props) => {
  const { user, channelsRequest } = props;

  useEffect(() => {
    channelsRequest();
  }, [window.location.href]);

  return (
    <HomeContainer>
      <h2>¡Bienvenido!</h2>
      {user.isLogged ? (
        <ButtonContainer>
          <Link to="/create">
            <button>Crear Canal</button>
          </Link>
        </ButtonContainer>
      ) : (
        <h4>Si deseas crear un canal debes iniciar sesión</h4>
      )}
      <Channels />
    </HomeContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  channelsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
