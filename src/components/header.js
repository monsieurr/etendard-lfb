import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import PersoImage from "./perso-image"

const headingTitleStyle = {
  color: "#1D84EB",
  textDecoration: "none",
}

const headerBannerStyle = {
    borderBottom: '1px solid rgb(29, 132, 235)',
    marginBottom: `0.2rem`,
    fontFamily: "Lato",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "960px",
    margin: "0 auto",
    flexWrap: "no-wrap",
    justifyContent: "space-around",
}

const linkedListElemStyle = {
    listStyleType: "none"
}

const linkedListStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px 20px",
    paddingInlineStart: "0px"

}

const Header = ({ siteTitle }) => (
  <header style={headerBannerStyle}>
      <section className="siteHeaderText">
      <h1>
        <Link to="/" style={headingTitleStyle}>
          {siteTitle}
        </Link>
      </h1>
      <ul style={linkedListStyle}>
        <li style={linkedListElemStyle}><Link to="/" className="navLinkText" activeClassName="active">HOME</Link></li>
        <li style={linkedListElemStyle}><Link to="/blog" className="navLinkText" activeClassName="active">BLOG</Link></li>
        <li style={linkedListElemStyle}><Link to="/projects" className="navLinkText" activeClassName="active">PROJECTS</Link></li>
        <li style={linkedListElemStyle}><Link to="/now" className="navLinkText" activeClassName="active">NOW</Link></li>
      </ul>
      </section>

      <section className="siteHeaderImage">
        <PersoImage />
      </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header