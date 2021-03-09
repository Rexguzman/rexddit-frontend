import React from 'react';
import { UserProfile } from '../../components';
import { ProfileContainer } from './Profile.styled';

const Profile = () => {
  return (
    <ProfileContainer>
      <UserProfile />
    </ProfileContainer>
  );
};

export default Profile;
