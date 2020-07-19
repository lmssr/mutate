import React from "react"
import { ContainerWrapper } from '../elements'

export const Container = ({ children }) => {
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>
    )
}
