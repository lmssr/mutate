import React, { useState } from 'react'
import {useStaticQuery, Link, graphql} from 'gatsby'
import { Navigation, Toggle, Navbox, Hamburger } from '../elements'
import { NavbarLinks } from '../components'
import {
    FaTwitter, FaInstagram, FaMedium, FaBars
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css'


export const Nav = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}
  // return (
  //   <NavWrapper>
  //   <FaBars className="bars"/>
  //   <ul className="nav-links">
  //     <li>
  //       <Link className="link" to="https://lucmosser.com/">
  //         <p>portfolio.</p>
  //       </Link>
  //     </li>
  //     <li>
  //       <Link className="link" to="/a-propos">
  //         <p>à propos.</p>
  //       </Link>
  //     </li>
  //     <li>
  //       <Link className="link" to="/contact">
  //         <p>contact.</p>
  //       </Link>
  //     </li>
  //     <li>
  //       <Link className="link" to="https://www.instagram.com/l_mssr/">
  //         <FaInstagram/>
  //       </Link>
  //     </li>
  //     <li>
  //       <Link className="link" to="https://twitter.com/Luc_Mosser">
  //         <FaTwitter/>
  //       </Link>
  //     </li>
  //     <li>
  //       <Link className="link" to="https://medium.com/@luc.mosser86">
  //         <FaMedium/>
  //       </Link>
  //     </li>
  //     </ul>
  //     {children}
  //   </NavWrapper>
  //   )
// }
