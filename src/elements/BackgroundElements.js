import styled from "styled-components"

export const BackgroundImageWrapper = styled.div`
  z-index: 0;
  overflow: overlay;
  background-color: transparent;
  position: absolute;
  padding-top: 60px;
  margin-bottom: 40px;
  display: flex;
  opacity: 0.6;

  @media (max-width: 768px) {

    padding-top: 90px;
  }
`
