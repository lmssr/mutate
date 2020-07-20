import React from "react"
import { ContainerWrapper, ContentWrapper } from '../elements'

export const Container = ({ children }) => {
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>
    )
}
