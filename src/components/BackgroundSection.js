// import React from 'react'
// import { graphql, StaticQuery } from 'gatsby'
// import styled from 'styled-components'

// import BackgroundImage from 'gatsby-background-image'

// export const BackgroundSection = ({ className }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         desktop: file(relativePath: { eq: "background.svg" }) {
//           childImageSharp {
//             fluid(quality: 90, maxWidth: 1920) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       // Set ImageData.
//       const imageData = data.desktop.childImageSharp.fluid
//       return (
//         <BackgroundImage
//           Tag="section"
//           className={className}
//           fluid={imageData}
//           backgroundColor={`#040e18`}
//         >
//           <h2>gatsby-background-image</h2>
//         </BackgroundImage>
//       )
//     }}
//   />
// )


