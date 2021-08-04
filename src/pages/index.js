import * as React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contact-form";
import Seo from '../components/seo'
import { Link } from "gatsby"
import Contact from "../components/contact";


// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "Montserrat, -apple-system, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

const secondHeadingAccentStyles = {
  color: "#f0ffff",
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}


const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}



// markup
const IndexPage = () => {
  return (
    <Layout style={pageStyles}>
        <Seo title="Home" />
        <section className="about">
            <h2>About me</h2>
                <h3>Skills</h3>
                <p>
                  I have been doing programming for more than 15 years, starting personally by building and managing websites then I want to the university, learned the theory (a lot) and made some cool projects,
                  then I did four internships in between and at the end of my master's degree. There I learned a lot about the real work environement, as a developper and as a project manager.
                </p>
                <p>
                  Nowadays I have been more focused on personal projects and keeping my skills sharp by refining my knowledge and learning new techs and tools.
                  I am currently open to work as I feel ready and confident to participate in an inovative project, feel free to <a href="#contact">contact me</a>.
                </p>

                <p>If you want to know more about what I do daily you can check the <Link to="/projects" className="navLinkText" activeClassName="active">PROJECTS</Link> and <Link to="/now" className="navLinkText" activeClassName="active">NOW</Link> sections of this website.</p>

                <h3>Interests</h3>
                <p>
                    I like to spend my free time creating stuff and staying sharp physically and mentally.
                    I do a lot of photography and would say it's my main creative avenue, I love to just go outside somewhere, shoot some picture, come back and edit them
                    to create a story and generate emotions.
                </p>
                <p>
                    I needed to go further and wanted to be able to create everything so I learned to use Photoshop, Illustrator and to model in 3D these past few years, still working on how to mix it with my photos.
                    I've also been doing videos and streaming sessions on Twitch from time to time to showcase my photo editing and share my passions.
                    I do sport around 3 times a week, particularly running and bodyweight exercises.
                </p>
                <p>I also like to compose music and have been doing so for about 3 years.</p>


            <h2>About this website</h2>
            <p>
                This website has been made using GatbsyJS, an open-source framework that combines functionality from React, GraphQL and Webpack into a single tool for building static websites and apps.
            </p>
            <p>
                It is more dev oriented and showing my organized side, I use my <a href="https://www.monsieur.space/" alt="monsieur.space link">other website</a> to show my creative/art making part.
            </p>
        </section>

        <section className="contact" id="contact">
            <h2>A question? A request? Contact me!</h2>
            <Contact />
        </section>
    </Layout>
  )
}


export default IndexPage
