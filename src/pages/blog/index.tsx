import React from 'react'
import { graphql } from 'gatsby'
import AwardBannerEu from 'features/components/templates/banners/award-banners/award-banner-eu'
import { TGatsbyHead } from 'features/types'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const Blog = ({ data }: any) => {
    const posts = data?.allStrapiPost.nodes || []
    console.log(posts, 33)

    return (
        <Layout>
            {posts.map((post: any) => {
                return (
                    <AwardBannerEu
                        key={post.Posts.title}
                        title={post.Posts.Title}
                        subtitle={post.Posts.tags}
                    />
                )
            })}
        </Layout>
    )
}

export const query = graphql`
    query {
        allStrapiPost {
            nodes {
                Posts {
                    Title
                    tags
                }
            }
        }
    }
`

export default WithIntl()(Blog)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Who we are | An Online Trading Platform | Deriv.com_t_"
        description="_t_Deriv is a pioneering and award-winning online trading platform that offers a wide selection of derivatives for anyone, anywhere to trade._t_"
        pageContext={pageContext}
    />
)
