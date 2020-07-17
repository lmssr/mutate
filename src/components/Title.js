import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { NavWrapper } from '../elements'


export const Title = ({ children }) => {
  return (
    <TitleWrapper>
      <h1>Mutate</h1>
    </TitleWrapper>
    )
}
