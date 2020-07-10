import styled from 'styled-components'

export const NavWrapper = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  background-color: blue;
  height: 10vh;

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
`
