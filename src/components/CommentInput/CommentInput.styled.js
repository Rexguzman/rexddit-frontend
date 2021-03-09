import styled from 'styled-components';

export const CommentInputContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: solid;
  border-radius: 15px;
  margin: 70px 15px;
  padding: 15px;

  :focus-within {
    background-color: RGB(0, 64, 166, 0.4);
  }

  h4 {
    text-align: start;
    margin-bottom: 10px;
  }

  textarea {
    width: 100%;
    background-color: transparent;
    border: none;
    color: white;
    transition: all 0.25s linear;
  }
  textarea:focus {
    outline: none;
    transition: all 0.25s linear;
  }

  button {
    width: 25%;
    align-self: flex-end;
    font-weight: bold;
    height: 40px;
    border-radius: 15px;
    margin-top: 15px;
    background-color: RGB(0, 64, 166, 0.4);
    border: solid #2680c1;
    transition: all 0.25s linear;
    color: ${({ theme }) => theme.font};
    cursor: ${({ isLogged }) => (isLogged ? 'pointer' : 'no-drop')};
  }
  button:hover {
    transition: all 0.25s linear;
    background-color: #2680c1;
  }
`;
