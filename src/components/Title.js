import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import { TitleWrapper } from '../elements'


export const Title = ({ children }) => {
  return (
    <TitleWrapper>
    <Link to='/' style={{textDecoration: "none", color:"#19446C"}}>
      mutate.
    </Link>
    </TitleWrapper>
    )
}
