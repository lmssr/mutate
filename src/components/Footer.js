import React from 'react'
import {useStaticQuery, Link, graphql} from 'gatsby'
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons } from '../elements'
import {
    FaTwitter, FaInstagram, FaMedium,
} from 'react-icons/fa';

export const Footer = () => {
  return <FooterWrapper>
            <FooterSocialWrapper>
              <FooterSocialIcons>
                <Link className="img" to="https://www.instagram.com/l_mssr/">
                  <FaInstagram/>
                </Link>
                <Link className="img" to="https://twitter.com/Luc_Mosser">
                  <FaTwitter/>
                </Link>
                <Link className="img" to="https://medium.com/@luc.mosser86">
                  <FaMedium/>
                </Link>
              </FooterSocialIcons>
              <p> © 2020 - mutate. </p>
            </FooterSocialWrapper>
          </FooterWrapper>
}

