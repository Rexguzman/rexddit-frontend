const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: true,
      };
    case 'DELETE_ERROR':
      return {
        ...state,
        error: false,
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.info,
      };
    case 'LOGOUT_REQUEST':
      sessionStorage.clear();
      return {
        ...state,
        user: action.info,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'ADD_CHANNELT':
      return {
        ...state,
      };
    case 'ADD_COMMENT':
      const findChannel = state.channels.find(
        (channel) => channel._id == action.payload.channelId
      );
      const addCommentInChannel = findChannel.comments.push(
        action.payload.commentInfo
      );

      return {
        ...state,
        channels: [...state.channels, findChannel],
      };
    case 'CHANNELS_LISTED':
      return {
        ...state,
        channels: action.payload,
      };
    case 'UPDATE_USER_IMG':
      return {
        ...state,
        user: { ...state.user, img: action.payload.img },
      };
    default:
      return state;
  }
};

export default reducer;
