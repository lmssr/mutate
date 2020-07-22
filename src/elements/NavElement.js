import styled from 'styled-components'

export const NavWrapper = styled.nav`
  display: flex;
  grid-template-columns: 1fr auto 1fr;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  height: 10vh;
  width: 100%;
  background-color: green;

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
