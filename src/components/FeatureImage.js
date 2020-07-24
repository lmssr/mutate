import React from "react"
import Img from "gatsby-image"
import {useStaticQuery, graphql} from 'gatsby'
import { FeatureImageWrapper } from '../elements'


export const FeatureImage = ({fixed}) => {

  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: {originalName: {eq: "sand.jpg"}}) {
        fixed(width: 1000, height: 400) {
          ...GatsbyImageSharpFixed
        }
    }
  }
    `
  )
  return (
      <FeatureImageWrapper>
        <Img
          fixed={fixed ? fixed : data.imageSharp.fixed}
        />
      </FeatureImageWrapper>
    )
}
