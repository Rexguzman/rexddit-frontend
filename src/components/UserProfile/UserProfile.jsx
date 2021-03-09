import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { UserProfileContainer } from './UserProfile.styled';

import { updateUserImgRequest } from '../../actions';

import { storage } from '../../firebase';
import { Loading } from '..';

const UserProfile = (props) => {
  const { user, updateUserImgRequest, channels } = props;

  const userChannelsLength = channels.filter(
    (channel) => channel.autorId == user.id
  ).length;

  //----> Firebase upload img
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  useEffect(() => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image, {});
      uploadTask.on(
        'state_changed',
        setLoading(true),
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref('images')
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
              setLoading(false);
              handleUpdateUserImgRequest(url);
            });
        }
      );
    } else {
      console.log('error');
    }
  }, [image]);

  const handleUpdateUserImgRequest = (url) => {
    const updateUserData = {
      id: user.id,
      email: user.email,
      img: url,
    };
    updateUserImgRequest(updateUserData);
  };

  return (
    <UserProfileContainer>
      <div className="profile-img">
        {user.img == null ? (
          <figure className="autor-img">
            <svg width="180" height="180" viewBox="0 0 496 512">
              <path
                fill="currentColor"
                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
              />
            </svg>
          </figure>
        ) : (
          <figure className="autor-img">
            <img src={user.img} alt="" />
          </figure>
        )}
        <label htmlFor="file-input">
          <figure className="upload-icon">
            <svg width="40" height="40" viewBox="0 0 496 496">
              <path
                fill="currentColor"
                d="M248,0C111,0,0,111,0,248S111,496,248,496,496,385,496,248,385,0,248,0ZM395.4,421.7a17.9,17.9,0,0,1-18,17.9H125.9a18,18,0,0,1-18-17.9V74.3a18,18,0,0,1,18-17.9H275.6V158.2a18,18,0,0,0,18,17.9H395.4Zm0-269.5H299.6V56.4h4.5a18,18,0,0,1,12.8,5.2L390.2,135a18,18,0,0,1,5.2,12.6Z"
                transform="translate(0 0)"
              />
              <path
                fill="currentColor"
                d="M242.7,227.8l-72.2,71.6a12,12,0,0,0,8.4,20.5h48.8v59.9a11.9,11.9,0,0,0,12,11.9h23.9a11.9,11.9,0,0,0,12-11.9V319.9h48.8a12,12,0,0,0,8.4-20.5l-72.1-71.6A12.7,12.7,0,0,0,242.7,227.8Z"
                transform="translate(0 0)"
              />
            </svg>
          </figure>
        </label>
        <input onChange={handleChange} id="file-input" type="file" />
      </div>
      <div className="profile-items">
        <div>
          <p className="title-item">Nombre:</p>
          <p className="info-item">{user.name}</p>
        </div>
        <div>
          <p className="title-item">Correo: </p>
          <p className="info-item">{user.email}</p>
        </div>
        <div>
          <p className="title-item">Estadisticas: </p>
          <div className="estadisticas-container">
            <div className="img-container">
              <figure>
                <svg width="40" height="40" viewBox="0 0 496 496">
                  <path
                    fill="currentColor"
                    d="M248,0C111,0,0,111,0,248S111,496,248,496,496,385,496,248,385,0,248,0ZM175.9,192.7V354.9H103.2a16.8,16.8,0,0,1-16.8-16.8V103.2a16.8,16.8,0,0,1,16.8-16.8h56.3a44.7,44.7,0,0,1,77.5,0h56.3a16.8,16.8,0,0,1,16.8,16.8v50.3H215A39.2,39.2,0,0,0,175.9,192.7ZM399.6,405.2A16.8,16.8,0,0,1,382.8,422H215a16.8,16.8,0,0,1-16.8-16.8V192.7A16.8,16.8,0,0,1,215,175.9h95.1v72.7a16.9,16.9,0,0,0,16.8,16.8h72.7Zm0-162.2H332.5V175.9h4.2a16.5,16.5,0,0,1,11.9,4.9l46.1,46.1a16.5,16.5,0,0,1,4.9,11.9Z"
                  />
                </svg>
              </figure>
              <p>{userChannelsLength}</p>
            </div>
          </div>
        </div>
      </div>
    </UserProfileContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    channels: state.channels,
  };
};

const mapDispatchToProps = {
  updateUserImgRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
