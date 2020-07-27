import React from "react"
import { BackgroundImageWrapper } from '../elements'
import { Title } from '../components'
import SVGback from '../images/background.svg'

export const BackgroundImage = () => {

  return (
      <BackgroundImageWrapper>
        <Title />
        <img
          src={SVGback}
          style= {{

            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
           }}
        />
      </BackgroundImageWrapper>
    )
}
