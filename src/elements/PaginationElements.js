import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const PaginationWrapper = styled.div`
  grid-column: 2 / span 12;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;


`

export const PaginationElement = styled(props => <Link {...props} />)`
 font-size: 0.875rem;
 line-height: 1.125rem;
 text-decoration: none;
 font-weight: 400;
 margin: O 2rem;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`
