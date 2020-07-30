import styled from 'styled-components'

export const AproposWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100rem;
  font-size: 20px;
  margin-top: 22rem;
  margin-left: 2rem;
  text-align: left;
  z-index: 10;
  font-family: open sans;


  @media (max-width: 1024px) {
    margin-top: 10rem;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    margin-top: 16rem;
    font-size: 24px;
  }

    @media (max-width: 480px) {
    margin-top: 16rem;
    font-size: 20px;
  }
`
