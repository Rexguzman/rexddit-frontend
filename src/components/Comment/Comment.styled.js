import styled from 'styled-components';

export const CommentContainer = styled.section`
  display: flex;
  border: solid;
  padding: 15px;
  margin: 30px 15px;
  border-radius: 15px;

  figure {
    margin: 0 20px 0 5px;
  }

  p,
  h4 {
    text-align: start;
  }

  h4 {
    margin-bottom: 10px;
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
