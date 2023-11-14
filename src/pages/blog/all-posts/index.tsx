import React from 'react'
import { graphql } from 'gatsby'
import { TGatsbyHead } from 'features/types'
import { SEO } from 'components/containers'
import { WithIntl } from 'components/localization'
import AllPostsModule from 'features/pages/posts/all-posts'

const BlogPosts = ({ data }: TBlogPosts) => {
    return <AllPostsModule data={data} />
}

export default WithIntl()(BlogPosts)

export const query = graphql`
    query {
        allStrapiPost(sort: { fields: createdAt, order: DESC }) {
            nodes {
                createdAt
                hero {
                    title
                    date
                    tags
                    banner {
                        localFile {
                            publicURL
                        }
                    }
                }
            }
        }
    }
`

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO title="_t__t_" description="_t_._t_" pageContext={pageContext} />
)
