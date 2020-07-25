import React from 'react'
import { graphql } from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import { Container, Post, FeatureImage, BackgroundImage, Apropos  } from '../components'
import { H1 } from '../elements'

const aPropos = ({data}) => {

  return (
    <Container>
    <BackgroundImage />
    <Apropos />
    </Container>
    )
  }

export default aPropos

