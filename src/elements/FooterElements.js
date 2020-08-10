import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  min-height: 4rem;
  padding: 1rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: transparent;
  position: relative;
  width:100%;




  @media (max-width: 1024px) {
  align-items: center;
  justify-content: center;
  padding-top: 0;
  margin-top: 0;
  }
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

