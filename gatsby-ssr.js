import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import {preToCodeBlock} from 'mdx-utils'
import Theme from "./src/themes/theme"
import { Table, Code } from "./src/components"
import './language-tabs.css'

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

const components = {
  table: Table,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    }
    return <pre {...props} />
  },
  wrapper: ({ children }) => <div>{children}</div>,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
  </MDXProvider>
  )
