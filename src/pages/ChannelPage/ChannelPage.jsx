import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ChannelPageContainer } from './ChannelPage.styled';
import { Channel, CommentInput, Comments } from '../../components';

const ChannelPage = (props) => {
  const { channels } = props;
  const { id } = useParams();

  const { name, cover, description, comments, autor, autorImg } = channels.find(
    (channel) => channel._id == id
  );

  return (
    <ChannelPageContainer>
      <Channel
        name={name}
        cover={cover}
        description={description}
        comments={comments}
        autor={autor}
        autorImg={autorImg}
      />
      {comments.length == 0 ? (
        <h4>Aún no hay comentarios</h4>
      ) : (
        <Comments comments={comments} />
      )}
      <CommentInput id={id} />
    </ChannelPageContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    channels: state.channels,
  };
};

export default connect(mapStateToProps, null)(ChannelPage);
