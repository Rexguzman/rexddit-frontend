import styled from 'styled-components';

export const UserProfileContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 90px 0;
  flex-flow: wrap;
  min-height: 45.5vh;

  img {
    border-radius: 50%;
    width: 180px;
    height: 180px;
  }
  .profile-items {
    margin: 0 40px;
  }
  .profile-items > div {
    display: flex;
    margin: 20px 0;
  }
  .title-item {
    background-color: #2680c1;
    border-radius: 15px;
    align-self: center;
    padding: 7px 10px;
    width: 150px;
  }
  .info-item {
    align-self: center;
    margin: 0 15px;
  }
  .estadisticas-container {
    display: flex;
    margin: auto;
  }
  .img-container {
    margin: 0 20px;
    position: relative;
  }
  .img-container p {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    border-radius: 50%;
    width: 25px;
  }
  .profile-img {
    position: relative;
  }
  .upload-icon {
    position: absolute;
    right: -20px;
    bottom: 12px;
    cursor: pointer;
  }
  input[type='file'] {
    display: none;
  }
`;
