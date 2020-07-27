import React from 'react'
import { graphql } from 'gatsby'
import { Container, Content, FeatureImage, BackgroundImage } from '../components'
import { H1 } from '../elements'

const notFound = ({ data }) => {
  const featureImage = data.imageSharp.fixed

  return (
    <Container>
      <BackgroundImage />
      <FeatureImage fixed={featureImage} />
      <Content>
        <H1 textAlign="center" margin="22rem 0 1rem 11rem">
        {" "}
        Je crois que ce que tu cherches ne se trouve pas ici...
        </H1>
      </Content>
    </Container>
    )
}

export default notFound

export const notFoundQuery = graphql`
query NotFoundQuery {
  imageSharp(fixed: {originalName: {eq: "sand.jpg"} }) {
    fixed(width: 1000, height: 400) {
      ...GatsbyImageSharpFixed
    }
  }
}
`

