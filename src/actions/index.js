import axios from 'axios';
import config from '../config';

const localUrl = config.apiProductionUrl;

// ---> Login
export const loginRequest = (payload) => {
  const info = {
    ...payload,
    isLogged: true,
  };
  return {
    type: 'LOGIN_REQUEST',
    info,
  };
};

export const loginUser = ({ email, password }, redirectUrl) => (dispatch) => {
  axios({
    url: `${localUrl}/api/auth/sign-in`,
    method: 'post',
    auth: {
      username: email,
      password,
    },
  })
    .then(({ data }) => {
      sessionStorage.setItem('name', data.user.name);
      sessionStorage.setItem('email', data.user.email);
      sessionStorage.setItem('id', data.user.id);
      sessionStorage.setItem('img', data.user.img);
      sessionStorage.setItem('isLogged', Boolean('true'));
      sessionStorage.setItem('token', data.token);
      console.log(data);
      dispatch(loginRequest(data.user));
    })
    .then(() => {
      window.location.href = redirectUrl;
    })
    .catch((error) => dispatch(setError(error)));
};

// ---> Logout
export const logoutRequest = (payload) => {
  const info = {
    ...payload,
    isLogged: false,
  };
  return {
    type: 'LOGOUT_REQUEST',
    info,
  };
};

// ---> Registro
export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const registerUser = (payload, redirectUrl) => (dispatch) => {
  axios
    .post(`${localUrl}/api/auth/sign-up`, payload)
    .then(({ data }) => dispatch(registerRequest(data)))
    .then(() => {
      window.location.href = redirectUrl;
    })
    .catch((error) => dispatch(setError(error)));
};

export const addComment = (payload) => ({
  type: 'ADD_COMMENT',
  payload,
});

export const addCommentRequest = (payload) => (dispatch) => {
  axios({
    url: `${localUrl}/api/channels/comment`,
    method: 'put',
    data: payload,
    headers: { authorization: `Bearer ${sessionStorage.getItem('token')}` },
    withCredentials: true,
  }).then(({ data }) => {
    dispatch(addComment(data));
    console.log(data);
  });
};

export const addChannel = (payload) => ({
  type: 'ADD_CHANNEL',
  payload,
});

export const addChannelRequest = (payload, redirectUrl) => (dispatch) => {
  axios({
    url: `${localUrl}/api/channels`,
    method: 'post',
    data: payload,
    headers: { authorization: `Bearer ${sessionStorage.getItem('token')}` },
    withCredentials: true,
  })
    .then(() => {
      window.location.href = redirectUrl;
    })
    .catch((error) => {
      dispatch(setError(error));
    });
};

export const setError = (payload) => ({
  type: 'SET_ERROR',
  payload,
});

export const deleteError = (payload) => ({
  type: 'DELETE_ERROR',
  payload,
});

export const channelsListed = (payload) => ({
  type: 'CHANNELS_LISTED',
  payload,
});

export const channelsRequest = (payload) => (dispatch) => {
  axios({
    url: `${localUrl}/api/channels`,
    method: 'get',
  })
    .then(({ data }) => {
      dispatch(channelsListed(data.data));
    })
    .catch((error) => dispatch(setError(error)));
};

export const updateUserImg = (payload) => ({
  type: 'UPDATE_USER_IMG',
  payload,
});

export const updateUserImgRequest = (payload) => (dispatch) => {
  axios({
    url: `${localUrl}/api/user/update-img`,
    method: 'put',
    data: payload,
    headers: { authorization: `Bearer ${sessionStorage.getItem('token')}` },
    withCredentials: true,
  }).then(({ data }) => {
    dispatch(updateUserImg(data));
  });
};
