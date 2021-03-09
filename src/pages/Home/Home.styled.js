import styled from 'styled-components';

export const HomeContainer = styled.section`
      text-align: center;
  h2 {
    margin: 40px 0;
  }
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;

  button {
    width: 25%;
    align-self: flex-end;
    font-weight: bold;
    height: 40px;
    border-radius: 15px;
    background-color: RGB(0, 64, 166, 0.4);
    border: solid #2680c1;
    transition: all 0.25s linear;
    color: ${({ theme }) => theme.font};
    cursor: pointer;
  }
  button:hover {
    transition: all 0.25s linear;
    background-color: #2680c1;
  }
  > a {
    display: flex;
    justify-content: flex-end;
    max-width: 1000px;
    margin: 0 15px;
  }
`;
