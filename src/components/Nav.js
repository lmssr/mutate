import React from 'react'
import {useStaticQuery, Link, graphql} from 'gatsby'
import { NavWrapper } from '../elements'
import {
    FaTwitter, FaInstagram, FaMedium,
} from 'react-icons/fa';

export const Nav = ({ children }) => {

  // const data = useStaticQuery(graphql`
  //   query {

  //   }
  // `)

  return (
    <NavWrapper>
    <ul>
      <li>
        <Link>
          <p>portfolio.</p>
        </Link>
      </li>
      <li>
        <Link>
          <p>à propos.</p>
        </Link>
      </li>
      <li>
        <Link>
          <p>contact.</p>
        </Link>
      </li>
      <li>
        <Link>
          <FaInstagram/>
        </Link>
      </li>
      <li>
        <Link>
          <FaTwitter/>
        </Link>
      </li>
      <li>
        <Link>
          <FaMedium/>
        </Link>
      </li>
      </ul>
      {children}
    </NavWrapper>
    )
}
