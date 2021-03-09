import React from 'react';
import { CreateChannelForm } from '../../components';
import { CreateChannelContainer } from './CreateChannel.styled';

const CreateChannel = () => {
  return (
    <CreateChannelContainer>
      <CreateChannelForm />
    </CreateChannelContainer>
  );
};

export default CreateChannel;
