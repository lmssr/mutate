import React from "react"
import { ContainerWrapper, ContentWrapper } from '../elements'

export const Content = ({ children }) => {
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>
    )
}
