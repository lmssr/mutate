import styled from 'styled-components'

export const TitleWrapper = styled.div`
  padding-left: 100px;
  transform: rotate(18deg);
  font-size: 40px;
  letter-spacing: 0.8rem;
  color: #19446C;
  position: absolute;
  opacity: 1;

  .link {
    color: #19446C;
    text-decoration: none;
  }

  @media (max-width: 768px) {

    padding-left: 18px;
    letter-spacing: 0.3rem;
    top: 25px;

    .link {
    font-size: 20px;
  }
  }

`
