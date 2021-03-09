import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #334557;
  color: white;
  margin-top: 30px;
  p {
    font-size: 1.6rem;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div section {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 25px 0;
  }
  div section figure {
    margin: 0 15px;
  }
  .secundary {
    width: 100%;
    background-color: #2680c1;
    padding: 15px 0;
  }
  div section figure {
    cursor: pointer;
    padding: 7px;
  }
  div section figure:hover {
    cursor: pointer;
    border-radius: 50%;
    background-color: #2680c1;
  }
`;
