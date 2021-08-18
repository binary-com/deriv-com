import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
// import { graphql, StaticQuery, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Subscribe from './components/_subscribe'
import RecentFeaturedPosts from './_recent-featured-posts'
import DVideoBanner from './video-banner'
// import Hero from './components/_hero'
import Layout from 'components/layout/layout'
import { Container, SEO, Flex } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
// import { Carousel } from 'components/elements'

// const query = graphql`
//     query {
//         hero_image_one: file(relativePath: { eq: "blog/blog-bg1.png" }) {
//             ...fadeIn
//         }
//         hero_image_two: file(relativePath: { eq: "blog/blog-bg2.png" }) {
//             ...fadeIn
//         }
//         hero_image_three: file(relativePath: { eq: "blog/blog-bg3.png" }) {
//             ...fadeIn
//         }
//     }
// `
const MainWrapper = styled(Flex)`
    background-color: var(--color-white);
    flex-direction: column;
    overflow: hidden;
`

const DerivBlog = () => {
    // const settings = {
    //     options: {
    //         loop: true,
    //     },
    //     container_style: {
    //         maxWidth: '100%',
    //         margin: '0 auto',
    //     },
    //     slide_style: {
    //         minWidth: '100%',
    //         position: 'relative',
    //     },
    //     navigation_style: {
    //         nav_color: '--color-grey-5',
    //     },
    // }
    const [header, setheader] = useState('')
    // const data = useStaticQuery(query)
    return (
        <Layout type="blog" is_ppc_redirect={true}>
            <SEO title={localize('Blog')} description={localize('Blog like a boss')} no_index />

            <RecentFeaturedPosts />
            <h1>Hello world</h1>
            <MainWrapper>
                <StaticQuery
                    query={graphql`
                        query MyQuery {
                            directus {
                                homepage_banners {
                                    id
                                    heading
                                    sub_heading
                                    image {
                                        imageFile {
                                            childImageSharp {
                                                gatsbyImageData
                                            }
                                        }
                                        id
                                    }
                                }
                            }
                        }
                    `}
                    render={(data) => setheader(data.directus.homepage_banners)}
                />
            </MainWrapper>

            {/* <Carousel has_autoplay autoplay_interval={600} {...settings}> */}
            {header && header.map((x) => <h1 key={x.id}>{localize(x.heading)}</h1>)}
            {/* </Carousel> */}
            <DVideoBanner />
            <Container>
                <Flex direction="column" ai="flex-start" jc="space-between">
                    <Subscribe />
                </Flex>
            </Container>
        </Layout>
    )
}

export default WithIntl()(DerivBlog)
