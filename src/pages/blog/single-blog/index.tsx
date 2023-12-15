import React from 'react'
import { graphql } from 'gatsby'

const BlogTemplate = (data) => {
    const { strapiPost } = data?.data || {} // Extracting the data object

    const { hero } = strapiPost || {}

    return (
        <div>
            <h1>{hero?.title}</h1>
            <p>Date: {hero?.date}</p>
            <p>Tags: {hero?.tags}</p>
        </div>
    )
}

export const query = graphql`
    query ($slug: String = "") {
        strapiPost(hero: { slug: { eq: $slug } }) {
            hero {
                title
                date
                tags
                slug
            }
        }
    }
`

export default BlogTemplate
