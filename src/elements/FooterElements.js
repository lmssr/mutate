import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  grid-column: 2 / span 12;
  min-height: 11.25rem;
  padding: 3rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: transparent;
`

export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;

  & p {
    text-align: center;
    flex: 0 0 100%;
  }
`

export const FooterSocialIcons = styled.div`
  flex: 0 0 100%;
  margin-bottom: 2rem;
  font-size: 2.5vh;
  text-decoration: none;

  & .img {
    color: #444444;
    padding: 0 1rem;
    transition: filter 0.3sec ease;
  }

  & .img:hover, img:focus {
    filter: brightness(50%);
  }
`

