import styled from 'styled-components';

export const StyledLoadingContainer = styled.div`
  .lds-dual-ring {
    display: inline-block;
  }
  .lds-dual-ring:after {
    content: ' ';
    display: block;
    width: 28px;
    height: 28px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
