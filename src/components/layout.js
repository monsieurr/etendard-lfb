/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/layout.css"

import Header from "./header"

import GithubIcon from '../assets/svgs/github_tinyicon.svg'
import GitlabIcon from '../assets/svgs/gitlab_tinyicon.svg'
import LinkedInIcon from '../assets/svgs/linkedin_tinyicon.svg'

// data
const links = [
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/thomas-lefebvre-199bb8107/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
    icon: <LinkedInIcon height="32px" class="filter-bw"/>
  },
  {
    text: "Github",
    url: "https://github.com/monsieurr",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
    icon: <GithubIcon height="32px" class="filter-bw"/>
  },
  {
    text: "Gitlab",
    url: "https://gitlab.com/monsieurr",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
    icon: <GitlabIcon height="32px" class="filter-bw"/>
  }
]

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          fontFamily: 'Lato',
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            borderTop: '1px solid rgb(29, 132, 235)'
          }}
        >
        <ul style={{display: "flex", gap: "0.3em", justifyContent: "center"}} className="socialLinkList">
            {links.map(link => (
            <li key={link.url} style={{listStyleType: "none"}}>
                <span>
                <a href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}>
                  {link.icon}
                </a>
                {link.badge && (
                    <span aria-label="New Badge">
                    NEW!
                    </span>
                )}
                </span>
            </li>
            ))}
        </ul>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout