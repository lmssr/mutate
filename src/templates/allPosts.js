import React from 'react'
import { graphql } from 'gatsby'
import { Container, Content, ContentCard, BackgroundImage, Pagination, AllFeatureImage, Seo } from '../components'

const allPosts = ({pageContext, data}) => {
  const {currentPage, numPages} = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges

  return (
      <Container>
        <Seo />
        <BackgroundImage/>
        <Content>
          {posts.map(post => (
            <div
              style={{
                marginTop:"5px",
              }}>
            <ContentCard
              key={post.node.frontmatter.slug}
              date={post.node.frontmatter.date}
              title={post.node.frontmatter.title}
              excerpt={post.node.frontmatter.excerpt}
              slug={post.node.frontmatter.slug}
            />
            <br/>
              </div>
            ))}
        </Content>
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Container>
    )
}

export default allPosts

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $ limit: Int!) {
      allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
    edges {
      node {
        frontmatter {
          title
          slug
          date
          excerpt
          featureImage {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
  }
`
