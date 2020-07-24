import React from 'react'
import { graphql } from 'gatsby'
import { Container, BackgroundImage } from '../components'

const aPropos = ({data}) => {

  return (
    <Container>
      <BackgroundImage />
      You are on the a-propos page
    </Container>
    )
  }

export default aPropos

