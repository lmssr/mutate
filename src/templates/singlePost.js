import React from 'react'
import { graphql } from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import { Container, Post, PostFeatureImage, BackgroundImage, Seo } from '../components'
import { H1, P } from '../elements'

const singlePost = ({data}) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed

  const seoImage = data.mdx.frontmatter.featureImage.publicURL
  return (
    <Container>
      <BackgroundImage/>
      <PostFeatureImage
        className="postPage"
        fixed={featureImage}
      />
      <Seo
        title = {data.mdx.frontmatter.title}
        image = {seoImage}
        description = {data.mdx.frontmatter.excerpt}
      />
      <Post>
        <H1>
          {data.mdx.frontmatter.title}
        </H1>
        <P style={{position: "absolute", right: "4rem", top:"22rem", fontFamily: "alice"}}>{data.mdx.frontmatter.date}</P>
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
      slug
      title
      date(formatString: "MMMM DD, YYYY")
      excerpt
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
