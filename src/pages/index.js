import React from "react"
import { Container, FeatureImage, Content, ContentCard } from '../components'

export const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="July 22, 2020"
          title="Lorem Ipsum"
          excerpt="Lorem Ipsum bla bla bla bla "
          slug="/test"
        />
      </Content>
    </Container>
    )
}

export default IndexPage
