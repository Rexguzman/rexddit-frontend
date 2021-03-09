import styled from 'styled-components';

export const CreateChannelFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 15px;

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }
  button {
    width: 25%;
    margin: 30px 0;
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
  textarea {
    width: 100%;
    padding: 20px;
    font-size: 2rem;
    background-color: transparent;
    border: solid ${({ theme }) => theme.font};
    border-radius: 15px;
    color: ${({ theme }) => theme.font};
    transition: all 0.25s linear;
  }
  textarea:focus {
    outline: none;
    transition: all 0.25s linear;
  }
  textarea:focus-within {
    background-color: RGB(0, 64, 166, 0.4);
  }
  .title-input {
    width: 100%;
    padding: 20px;
    margin-bottom: 30px;
    font-size: 2rem;
    font-weight: bold;
    background-color: transparent;
    border: solid ${({ theme }) => theme.font};
    border-radius: 15px;
    color: ${({ theme }) => theme.font};
    transition: all 0.25s linear;
  }
  .title-input:focus {
    outline: none;
    transition: all 0.25s linear;
  }
  input:focus-within {
    background-color: RGB(0, 64, 166, 0.4);
  }
  p {
    margin-right: 15px;
    font-size: 1.5rem;
  }

  .upload-file-container {
    height: 60px;
    margin: 20px 0;
    border: solid;
    border-radius: 15px;
    justify-content: space-between;
    padding: 0 15px;
  }

  .upload-file-button {
    margin: 0;
    align-self: center;
  }

  input[type='file'] {
    font-size: 1.5rem;
    border: none;
    min-width: 50%;
    width: 67%;
    max-width: 100%;
  }
  input[type='file']:focus-within {
    background-color: transparent;
  }
  input[type='file']:focus {
    outline: none;
  }
  input[type='file']::-webkit-file-upload-button {
    margin: 30px 0;
    margin-right: 15px;
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
  input[type='file']::-webkit-file-upload-button:hover {
    transition: all 0.25s linear;
    background-color: #2680c1;
  }
  input[type='file']::-webkit-file-upload-button:focus {
    outline: none;
  }
`;
