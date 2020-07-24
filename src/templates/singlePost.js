import React from 'react'
import { graphql } from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import { Container, Post, FeatureImage, BackgroundImage } from '../components'
import { H1 } from '../elements'

const singlePost = ({data}) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed

  return (
    <Container>
      <BackgroundImage/>
      <FeatureImage
        className="postPage"
        fixed={featureImage}
      />
      <Post>
        <H1 margin="400px 0 8rem 0">
          {data.mdx.frontmatter.title}
        </H1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </Container>
    )
  }

export default singlePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
      mdx(id: { eq: $id }) {
    body
    frontmatter {
      date
      excerpt
      slug
      title
      featureImage {
        childImageSharp {
          fixed(width: 1000, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
  }
`
