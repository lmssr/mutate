import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle `
  * {
    box-sizing: border;
    margin: 0;
    padding: 0;
  }

  body, html {
    font-family: ${props => props.theme.fonts.main};
    height: 100%;
    color: #444444;
    background-color: #FFFCF8;
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
  )
