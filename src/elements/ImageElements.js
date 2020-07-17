import styled from "styled-components"
import Img from "gatsby-image"
import {useStaticQuery, graphql} from 'gatsby'
import { FeatureImageWrapper } from '../elements'

export const FeatureImageWrapper = styled.div`
  grid-column: 3 / span 10;
  grid-row: 2 / 4;
  overflow: hidden;
  position: relative;
  background-color: yellow ;
`
