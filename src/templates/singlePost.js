import React from 'react'
import { graphql } from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import { Container, Post, PostFeatureImage, BackgroundImage, Seo } from '../components'
import { H1 } from '../elements'

const singlePost = ({data}) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed

  const seoImage = data.mdx.frontmatter.featureImage.publicURL
  return (
    <Container>
      <Seo
        title = {data.mdx.frontmatter.title}
        image = {seoImage}
        description = {data.mdx.frontmatter.excerpt}
      />
      <BackgroundImage/>
      <PostFeatureImage
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
        publicURL
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
