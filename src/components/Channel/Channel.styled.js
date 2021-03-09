import styled from 'styled-components';

export const ChannelContainer = styled.div`
  border: solid;
  border-radius: 15px;
  margin: 70px 15px;

  .title {
    margin: 20px;
    text-align: start;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 400px;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url('${(porps) => porps.cover}');
  }

  .img-container figure {
    position: relative;
  }
  .img-container {
    height: 400px;
  }

  .img-container > div {
    position: relative;
    display: flex;
    width: 100%;
    max-width: 1000px;
    justify-content: space-between;
    bottom: 55px;
    padding-left: 20px;
  }
  .img-container > div > div {
    display: flex;
    padding-right: 30px;
  }
  .img-container > div > div p {
    background-color: red;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    right: 15px;
    top: -10px;
    font-weight: bold;
    color: white;
  }
  > p {
    margin: 20px;
    text-align: start;
  }

  h4 {
    align-self: center;
    color: white;
  }

  .autor-img img,
  .autor-img svg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
    color: white;
  }
`;
