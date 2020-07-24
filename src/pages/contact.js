import React from 'react'
import { graphql } from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import { Container, Post, FeatureImage, BackgroundImage, ContactForm } from '../components'
import { H1 } from '../elements'

const contact = ({data}) => {

  return (
    <Container>
    <BackgroundImage />
    <ContactForm />
    </Container>
    )
  }

export default contact

