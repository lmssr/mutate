import styled from "styled-components"

export const AllFeatureImageWrapper = styled.div`
  display: flex;
  position: relative;
  left: 28rem;
  top: -3rem;
  opacity: 0.6;
  width: 50%;

  @media (max-width: 480px) {
    top: -27rem;
    left: 0;
    margin-bottom: 10px;
    justify-content: center;
    font-size: 16px;
    height: auto;
    width: 100%;
}

@media (max-width: 320px) {
    top: -36rem;
    left: 0;
    margin-bottom: 10px;
    justify-content: center;
    font-size: 16px;
    height: auto;
    width: 100%;
}
`
