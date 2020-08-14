import React from "react"
import Img from "gatsby-image"
import {useStaticQuery, graphql} from 'gatsby'
import { AllFeatureImageWrapper } from '../elements'


export const AllFeatureImage = ({fixed}) => {

  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: {originalName: {eq: "bike.jpg"}}) {
        fixed(width: 500, height: 300) {
          ...GatsbyImageSharpFixed
        }
    }
  }
    `
  )
  return (
      <AllFeatureImageWrapper>
        <Img
          fixed={fixed ? fixed : data.imageSharp.fixed}
        />
      </AllFeatureImageWrapper>
    )
}
