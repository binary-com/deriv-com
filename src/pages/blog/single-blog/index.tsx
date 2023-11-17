import React from 'react'
import { graphql } from 'gatsby'

const BlogTemplate = ({ data }) => {
    const posts = data?.allStrapiPost?.nodes || []
    return <div>sejfshjskdab</div>
}

export const query = graphql`
    query ($title: String!) {
        allStrapiPost(filter: { hero: { title: { eq: $title } } }) {
            nodes {
                createdAt
                hero {
                    title
                    date
                }
            }
        }
    }
`

export default BlogTemplate
