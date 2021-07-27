import * as React from "react"
import Layout from "../components/layout"
import { graphql, Link } from 'gatsby'


const blogPostWrapper = {
    color: "#5c5c5c",
    padding: "10px"
}


const blogPostLink = {
    color: "#1D84EB",
    textDecoration: "none"
}

const blogPostTitle = {
    fontWeight: "normal"

}

const blogPostDate = {
    color: "rgb(170 170 170)"
}

const BlogPage = ({data}) => {
    return(
        <Layout>
            <div>
                {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
                    <div style={blogPostWrapper}>
                    <Link to={fields.slug} style={blogPostLink}>
                        <h2 style={blogPostTitle} className="blogPostTitle">{frontmatter.title}</h2>
                    </Link>
                        <p style={blogPostDate}>{frontmatter.date}</p>
                        <section>
                        <p
                            dangerouslySetInnerHTML={{
                            __html: frontmatter.description || excerpt,
                            }}
                            itemProp="description"
                        />
                        </section>
                    </div>
                ))}
            </div>
        </Layout>
    )
}


export const query = graphql
`
    query BlogQuery {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
        ) {
            nodes {
                id
                excerpt(pruneLength: 250)
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                }
            }
        }
    }
`

export default BlogPage