import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment/moment'
import Layout from 'features/components/templates/layout'
import MainNav from 'features/components/templates/navigation/main-nav'
import Flex from 'features/components/atoms/flex-box'
import Footer from 'features/components/templates/footer'
const BlogTemplate = (data: any) => {
    const { hero, blogPostMarkDown } = data?.data?.strapiPost || {}
    const momentDate = moment(hero?.date)
    const formattedDate = momentDate.format('MMMM D, YYYY')

    return (
        <Layout>
            <MainNav />

            <Flex.Box>
                <h1>{hero?.title}</h1>
                <p>{formattedDate}</p>
                <p>{hero?.tags}</p>
                <div>
                    <img src={hero?.banner?.localFile?.publicURL} alt="" width="512px" />
                </div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: blogPostMarkDown?.data?.childrenMarkdownRemark[0]?.html,
                    }}
                />
            </Flex.Box>
            <Footer />
        </Layout>
    )
}

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

export default BlogTemplate
