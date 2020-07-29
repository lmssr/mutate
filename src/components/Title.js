import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import { TitleWrapper } from '../elements'


export const Title = ({ children }) => {
  return (
    <TitleWrapper>
    <Link className="link" to='/' >
      mutate.
    </Link>
    </TitleWrapper>
    )
}
