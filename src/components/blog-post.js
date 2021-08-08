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
                image {
                    childImageSharp {
                    fluid(
                        maxWidth: 608
                        maxHeight: 300)
                        {
                            src
                            srcSet
                    }
                    }
                }
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
            <img src={frontmatter.image.childImageSharp.fluid.src} style={{width: '100%', height: 'auto'}}></img>
            <MDXRenderer>{body}</MDXRenderer>
        </Layout>
    )
}