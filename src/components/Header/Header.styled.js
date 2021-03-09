import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #2680c1;
  color: white;
  position: relative;
  z-index: 2;

  nav {
    display: flex;
  }

  h1 {
    font-size: 2.5rem;
  }

  a {
    display: flex;
    color: white;
    align-items: center;
  }

  div {
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px 0;
  }

  .logo {
    margin-left: 20px;
    padding: 5px;
  }

  nav figure {
    margin-right: 20px;
    padding: 7px;
  }
  nav figure:hover {
    cursor: pointer;
    border-radius: 50%;
    background-color: #194d73;
  }

  .autor-img img,
  .autor-img svg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
  }
`;

export const MenuContainer = styled.nav`
  background: #2680c1;
  position: absolute;
  width: 100%;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-190px)')};
  transition: all 0.25s linear;
  z-index: 1;
  margin: 20px 0;

  div {
    padding: 20px 0;
    font-weight: bold;
    color: white;
    cursor: pointer;
    margin: 10px 20px;
  }

  div:hover {
    background-color: #194d73;
    border-radius: 15px;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    width: 50%;
    right: 12px;
    border-radius: 15px;
  }
`;
