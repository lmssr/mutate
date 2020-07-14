import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { StyledBackgroundSection } from "../elements"

import BackgroundImage from 'gatsby-background-image'

export const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        bg: file(relativePath: { eq: "background.svg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const bg = data.bg.childImageSharp.fluid
      return (
        <StyledBackgroundSection>
        <BackgroundImage
          title = "bg"
          className={className}
          fluid={bg}
        >
          <h2>gatsby-background-image</h2>
        </BackgroundImage>
        </StyledBackgroundSection>
      )
    }}
  />
)
