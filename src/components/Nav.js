import React from 'react'
import {useStaticQuery, Link, graphql} from 'gatsby'
import { NavWrapper } from '../elements'
import {
    FaTwitter, FaInstagram, FaMedium,
} from 'react-icons/fa';

export const Nav = ({ children }) => {

  // const data = useStaticQuery(graphql`
  //   query {
  //     logo: file(relativePath: { eq: "logo.svg" }) {
  //       publicURL
  //     }
  //   }
  // `)

  return (
    <NavWrapper>

    <ul className="nav-links">
      <li>
        <Link className="link">
          <p>portfolio.</p>
        </Link>
      </li>
      <li>
        <Link className="link">
          <p>à propos.</p>
        </Link>
      </li>
      <li>
        <Link className="link" to="/contact">
          <p>contact.</p>
        </Link>
      </li>
      <li>
        <Link className="link" to="https://www.instagram.com/l_mssr/">
          <FaInstagram/>
        </Link>
      </li>
      <li>
        <Link className="link" to="https://twitter.com/Luc_Mosser">
          <FaTwitter/>
        </Link>
      </li>
      <li>
        <Link className="link" to="https://medium.com/@luc.mosser86">
          <FaMedium/>
        </Link>
      </li>
      </ul>
      {children}
    </NavWrapper>
    )
}
