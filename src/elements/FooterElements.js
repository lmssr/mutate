import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  min-height: 4rem;
  padding: 2rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: transparent;
  position:absolute;
  bottom: -1700px;
  width:100%;
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

