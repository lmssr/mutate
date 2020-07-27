import React from "react"
import Img from "gatsby-image"
import {useStaticQuery, graphql} from 'gatsby'
import { PostFeatureImageWrapper } from '../elements'


export const PostFeatureImage = ({fixed}) => {

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
      <PostFeatureImageWrapper>
        <Img
          fixed={fixed ? fixed : data.imageSharp.fixed}
        />
      </PostFeatureImageWrapper>
    )
}
