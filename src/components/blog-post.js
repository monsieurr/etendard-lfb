import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from './layout'
import Seo from '../components/seo'


export const query = graphql
    `
    query PostsByID($id: String!) {
        site {
            siteMetadata {
                title
            }
        }
        mdx(
            id: { eq: $id }
        ){
            body
            frontmatter {
                title
                date(formatString: "YYYY MMMM Do")
            }
        }
    }
`

export default ({ data }) => {
    const { frontmatter, body } = data.mdx
    return (
            <Layout>
            <Seo
                title={frontmatter.title}
                description={frontmatter.description}
            />
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <MDXRenderer>{body}</MDXRenderer>
        </Layout>
    )
}