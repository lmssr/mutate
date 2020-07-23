import React from "react"
// import Img from "gatsby-image"
import {useStaticQuery, graphql} from 'gatsby'
import { FeatureImageWrapper, TitleWrapper } from '../elements'
import { Title } from '../components'
import SVGback from '../images/background.svg'

export const BackgroundImage = () => {

  // const data = useStaticQuery(graphql`
  //   query {
  //     imageSharp(fixed: {originalName: {eq: "logo.svg"}}) {
  //       fixed {
  //         ...GatsbyImageSharpFixed
  //       }
  //   }
  // }
  //   `
  // )
  return (
      <FeatureImageWrapper>
        <Title />
        <img
          src={SVGback}
          style= {{

            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
           }}
        />
      </FeatureImageWrapper>
    )
}
