import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


const headingTitleStyle = {
  color: "#1D84EB",
  textDecoration: "none"
}

const headerBannerStyle = {
    borderBottom: '1px solid rgb(29, 132, 235)',
    marginBottom: `0.2rem`,
    fontFamily: "Lato"
}

const linkedListElemStyle = {
    listStyleType: "none"
}

const linkedListStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px 20px"

}


const Header = ({ siteTitle }) => (
  <header style={headerBannerStyle}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.6rem 1.0875rem`,
      }}
    >
      <h1>
        <Link to="/" style={headingTitleStyle}>
          {siteTitle}
        </Link>
      </h1>
      <section className="menu">
        <ul style={linkedListStyle}>
                <li style={linkedListElemStyle}><Link to="/" className="navLinkText" activeClassName="active">HOME</Link></li>
                <li style={linkedListElemStyle}><Link to="/blog" className="navLinkText" activeClassName="active">BLOG</Link></li>
                <li style={linkedListElemStyle}><Link to="/projects" className="navLinkText" activeClassName="active">PROJECTS</Link></li>
                <li style={linkedListElemStyle}><Link to="/now" className="navLinkText" activeClassName="active">NOW</Link></li>
        </ul>
    </section>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header