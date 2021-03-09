import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
      *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
        font-family: 'Nunito Sans', sans-serif;
        scroll-behavior: smooth;
    }
    body {
        transition: all 0.25s linear;
        text-rendering: optimizeLegibility;
        color: ${({ theme }) => theme.font};
        background-color: ${({ theme }) => theme.primary};
    }
    body::-webkit-scrollbar {
        width: 7px;
    }
    body::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 5px;
    }
    body::-webkit-scrollbar-thumb {
        background-color: #334557;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    button:focus {
        outline: none;
    }
    figure {
        margin: 0;
        padding:0;
    }
    h1 {
        font-size: 4rem;
        text-align: center;
    }
    h2 {
        font-size: 3.5rem;
        text-align: center;
    }
    h3 {
        font-size: 3rem;
        text-align: center;
    }
    h4 {
        font-size: 2rem;
        text-align:center;
    }
    p {
        font-size: 2rem;
        text-align: center;

    }
`;
