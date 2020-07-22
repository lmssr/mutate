import React from 'react'
import { graphql } from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import { Container, Post, FeatureImage } from '../components'
import { H1 } from '../elements'

const contact = ({data}) => {

  return (
    <Container>
      You are on the contact page
    </Container>
    )
  }

export default contact

