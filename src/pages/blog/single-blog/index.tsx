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
    query ($title: String = "") {
        strapiPost(hero: { title: { eq: $title } }) {
            hero {
                title
                date
                tags
            }
        }
    }
`

export default BlogTemplate
