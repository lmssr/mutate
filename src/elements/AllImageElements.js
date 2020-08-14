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
    background-color: red;
    margin-bottom: 12px;
    height: 100%;
    width: 100%;
}
`
