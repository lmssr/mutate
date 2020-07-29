import styled from 'styled-components'

export const NavWrapper = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  height: 10vh;
  width: 100%;
  color: #19446C;
  background-color: transparent;
  z-index: 1;

  .nav-links {
    display: flex;
    flex-direction: column;
    flex-flow: row nowrap;
    justify-content: space-evenly;

    width: 35vw;
    list-style: none;
  }

  .bars {
    color: transparent;
  }

  .link {
    color: #19446C;
    font-size: 2.5vh;
    text-decoration: none;
  }

    & .link {
    transition: filter 0.3sec ease;
  }

  & .link:hover, link:focus {
    filter: brightness(10%);
  }

  @media (max-width: 1024px) {

    .bars {
      color: #19446C;
      position: absolute;
      right: 20px;
      top: 20px;
    }

    .link {
    display: flex;
    flex-direction: column;
    }
  }

`
