import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const PaginationWrapper = styled.div`
  grid-column: 2 / span 12;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position:absolute;
  bottom: -1500px;
  width:100%;

  a:nth-child(1) {
    color: ${props => props.isFirst ? props.theme.colors.dark : "#19446C"};
    pointer-events: ${props => (props.isFirst ? "none" : "auto")};
    cursor: ${props => (props.isFirst ? "default" : "pointer")};
  }

  a:nth-child(2) {
    color: ${props => props.isLast ? props.theme.colors.dark : "#19446C"};
    pointer-events: ${props => (props.isLast ? "none" : "auto")};
    cursor: ${props => (props.isLast ? "default" : "pointer")};
  }
`

export const PaginationElement = styled(props => <Link {...props} />)`
 font-size: 0.875rem;
 line-height: 1.125rem;
 text-decoration: none;
 font-weight: 400;
 margin: 0 0.8rem;
 color: #444444;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`
