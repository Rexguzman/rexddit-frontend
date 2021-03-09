import React from 'react';
import { connect } from 'react-redux';

import Channel from '../Channel/Channel';
import { ChannelContainer } from './Channels.styled';

const Channels = (props) => {
  const { channels } = props;

  const channelsSort = channels.sort((channelA, channelB) => {
    if (channelA.comments < channelB.comments) {
      return 1;
    }
    if (channelA.comments > channelB.comments) {
      return -1;
    }
    return 0;
  });

  return (
    <ChannelContainer>
      {channelsSort.map((channel) => (
        <Channel
          key={channel._id}
          id={channel._id}
          name={channel.name}
          cover={channel.cover}
          description={channel.description}
          autor={channel.autor}
          autorImg={channel.autorImg}
          comments={channel.comments}
        />
      ))}
    </ChannelContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    channels: state.channels,
  };
};

export default connect(mapStateToProps, null)(Channels);
