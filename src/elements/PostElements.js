import styled from "styled-components"

export const PostWrapper = styled.main`
  display: flex;
  position: absolute;
  text-align: center;
  flex-direction: column;
  top: 100px;
  left: 50%;
  margin-left: -350px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: {props => props.theme.color.dark}
  }

  h1:not(:first-child)
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }

  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 400;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 400;
  }

  h3 {
    font-size: 1.375rem;
    line-height: 1.675rem;
    font-weight: 700;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  h5 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 700;
  }

  h6 {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 400;
    margin-top: 2rem;
  }

  a {
    text-decoration: underline;
  }

  strong {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  blockquote p {
    font-style: italic;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
  }

  ul,
  ol {
    margin: 1rem 0 1rem 2rem;
  }

  li {
    margin: 0.25rem 0 ;
  }

  code {
    font-size: 1rem;
    line-height: 1.875rem;
    background-color: white;
    padding: 0 0.3rem;
  }

  hr {
    border: 0;
    height: 1px;
    background-color: white;
    opacity: 0.1;
    margin-top: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  th {
    font-weight: 700;
  }

  table,
  th,
  td {
    border: 1px solid;
  }

  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }
`
