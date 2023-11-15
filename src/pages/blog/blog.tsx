import React from 'react'
import { graphql } from 'gatsby'

const BlogTemplate = ({ data }: TBlogPosts) => {
    const posts = data?.allStrapiPost?.nodes || []
    console.log(posts)

    return <div>sejfshjskdab</div>
}

export const query = graphql`
    query ($slug: String!) {
        allStrapiPost(filter: { hero: { title: { eq: $slug } } }) {
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
