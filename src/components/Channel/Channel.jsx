import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChannelContainer } from './Channel.styled';

const Channel = (props) => {
  const { id, name, cover, description, autor, autorImg, comments } = props;

  //----> Scroll to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (pathname == '/') {
    return (
      <Link to={`/channel/${id}`}>
        <ChannelContainer cover={cover}>
          <h2 className="title">{name}</h2>
          <div className="img-container">
            <figure>
              <span></span>
            </figure>
            <div>
              <div>
                {autorImg == null ? (
                  <figure className="autor-img">
                    <svg width="40" height="40" viewBox="0 0 496 512">
                      <path
                        fill="white"
                        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                      />
                    </svg>
                  </figure>
                ) : (
                  <figure className="autor-img">
                    <img src={autorImg} alt="" />
                  </figure>
                )}
                <h4>{autor}</h4>
              </div>
              <div>
                <figure>
                  <svg width="40" height="40" viewBox="0 0 496 496">
                    <path
                      fill="white"
                      d="M248,0C111,0,0,111,0,248S111,496,248,496,496,385,496,248,385,0,248,0ZM58.9,299.1a5.1,5.1,0,0,1-4.8-3.2,5.2,5.2,0,0,1,1-5.8c.2-.2,14.9-16.2,23.9-36.4-16-17.4-25.4-38.5-25.4-61.5,0-59,62.2-106.9,139-106.9s138.9,47.9,138.9,106.9S269.3,299.1,192.6,299.1a170,170,0,0,1-74.4-16.7C103.6,290.9,83.4,299.1,58.9,299.1Zm379,82.3a5.2,5.2,0,0,1-4.8,3.3c-24.5,0-44.7-8.3-59.3-16.8-21.5,10.6-47,16.8-74.4,16.8-57.5,0-107-27-128-65.5a182.8,182.8,0,0,0,21.2,1.3c88.3,0,160.3-57.5,160.3-128.3a99.4,99.4,0,0,0-.9-13.4c50.7,16,86.4,54.3,86.4,99,0,22.9-9.4,44.1-25.4,61.4,9,20.3,23.7,36.2,23.9,36.4A5.2,5.2,0,0,1,437.9,381.4Z"
                    />
                  </svg>
                </figure>
                <p>{comments.length}</p>
              </div>
            </div>
          </div>
          <p>{description}</p>
        </ChannelContainer>
      </Link>
    );
  } else {
    return (
      <ChannelContainer cover={cover}>
        <h2 className="title">{name}</h2>
        <div className="img-container">
          <figure>
            <span></span>
          </figure>
          <div>
            <div>
              {autorImg == null ? (
                <figure className="autor-img">
                  <svg width="40" height="40" viewBox="0 0 496 512">
                    <path
                      fill="white"
                      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                    />
                  </svg>
                </figure>
              ) : (
                <figure className="autor-img">
                  <img src={autorImg} alt="" />
                </figure>
              )}
              <h4>{autor}</h4>
            </div>
            <div></div>
          </div>
        </div>
        <p>{description}</p>
      </ChannelContainer>
    );
  }
};

export default Channel;
