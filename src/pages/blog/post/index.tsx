import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'features/components/templates/layout'
import Flex from 'features/components/atoms/flex-box'
import { TGatsbyHead } from 'features/types'
import { SEO } from 'components/containers'
import { WithIntl } from 'components/localization'

const BlogPost = ({ data }: any) => {
    const { hero } = data?.allStrapiPost?.nodes || {}
    console.log('data', data)

    return (
        <Layout>
            <Flex.Box>
                <div>FAKE DATA</div>
                <div>{hero?.title}</div>
                <div>{hero?.tags}</div>
                <img src={hero?.banner} alt={hero?.banner} />
            </Flex.Box>
        </Layout>
    )
}

export default WithIntl()(BlogPost)

// export const query = graphql`
//     query {
//         allStrapiPost(filter: { id: { eq: "2" } }) {
//             nodes {
//                 hero {
//                     title
//                     date
//                     tags
//                     banner {
//                         localFile {
//                             publicURL
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `

// export const query = graphql`
//     query {
//         allStrapiPost {
//             nodes(filter: { title: { eq: "market-recap" } }) {
//                 hero {
//                     title
//                     date
//                     tags
//                     banner {
//                         localFile {
//                             publicURL
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO title="_t_title_t_" description="_t_description_t_" pageContext={pageContext} />
)
