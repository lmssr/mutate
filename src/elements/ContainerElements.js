import styled from "styled-components"

export const ContainerWrapper = styled.div`
  height: 100%;
  display: flex;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: 7.8rem 20rem 5rem auto;
  gap: 0 2rem;
  background-color: yellow;
`
