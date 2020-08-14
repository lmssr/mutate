import React from 'react'
import { graphql } from 'gatsby'
import { Container, Content, ContentCard, BackgroundImage, PostFeatureImage, Pagination, Seo } from '../components'

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
              featureImage={post.node.frontmatter.featureImage.childImageSharp.fixed}
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
  query AllPostsQuery($skip: Int!, $limit: Int!) {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC },
        skip: $skip,
        limit: $limit,
      ) {
    edges {
      node {
        frontmatter {
          slug
          title
          date(formatString: "MMMM DD, YYYY")
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
