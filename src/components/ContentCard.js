import React from "react"
import { CardWrapper, P, H2 } from '../elements'
import { Button, AllFeatureImage } from '../components'

export const ContentCard = ({ date, title, excerpt, slug, featureImage }) => {
  return (
    <CardWrapper>
      <P className="date" size="xSmall" textAlign="left" margin="0 0 0.5rem 0" color="dark">
        {date}
      </P>
      <P className="title" textAlign="left" margin="0 0 1rem 0">
        {title}
      </P>
      <br/>
      <br/>
      <P className="text" size="small" textAlign="left" margin="0 3 1.5rem 0" color="dark">
        {excerpt}
      </P>
      <br/>
      <Button href={slug} textAlign="left" textDecoration= "none">lire la suite ...</Button>
      <AllFeatureImage
        className="postPage"
        fixed={featureImage}/>
    </CardWrapper>
    )
}
