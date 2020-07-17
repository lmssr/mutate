import styled from 'styled-components'

export const NavWrapper = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  background-color: transparent;
  height: 10vh;
  background-color: transparent;

  .nav-links {
    display: flex;
    flex-direction: column;
    flex-flow: row nowrap;
    justify-content: space-evenly;

    width: 35vw;
    list-style: none;
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
`
