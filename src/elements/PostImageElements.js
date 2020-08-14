import styled from "styled-components"

export const PostFeatureImageWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 100px;
  left: 50%;
  margin-left: -500px;
  box-shadow: 5px 5px 5px #444444;
  text-align: center;
  margin-top: 5rem;
  z-index: 0;
  opacity: 0.6;


  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    left: 0;
  }
`
