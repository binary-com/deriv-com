import React from 'react'
import { graphql } from 'gatsby'
import PostModule from 'features/pages/posts/single-blog'
import { TGatsbyHead } from 'features/types'
import { SEO } from 'components/containers'
import { WithIntl } from 'components/localization'

const BlogTemplate = ({ data }: TBlogPost) => {
    return <PostModule data={data} />
}

export default WithIntl()(BlogTemplate)

export const query = graphql`
    query {
        strapiPost(hero: { title: { eq: "hello-deriv-x-deriv-y" } }) {
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
            blogPostMarkDown {
                data {
                    childrenMarkdownRemark {
                        html
                    }
                }
            }
        }
    }
`

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO title="_t__t_" description="_t_._t_" pageContext={pageContext} />
)
