// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { NavItem } from "../elements"
import {
    FaTwitter, FaInstagram, FaMedium, FaBars
} from 'react-icons/fa';

export const NavbarLinks = () => {
  return (
    <div>
      <NavItem to="https://lucmosser.com/">portfolio.</NavItem>
      <NavItem to="/a-propos">à propos.</NavItem>
      <NavItem to="/contact">contact.</NavItem>
      <NavItem to="https://www.instagram.com/l_mssr/"><FaInstagram/></NavItem>
      <NavItem to="https://twitter.com/Luc_Mosser"><FaTwitter/></NavItem>
      <NavItem to="https://medium.com/@luc.mosser86"><FaMedium/></NavItem>
    </div>
  )
}


