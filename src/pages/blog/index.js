import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Subscribe from './components/_subscribe'
import RecentFeaturedPosts from './_recent-featured-posts'
import DVideoBanner from './video-banner'
import Hero from './components/_hero'
import Layout from 'components/layout/layout'
import { Container, SEO, Flex } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import { Carousel } from 'components/elements'

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
    const settings = {
        options: {
            loop: true,
        },
        container_style: {
            maxWidth: '100%',
            margin: '0 auto',
        },
        slide_style: {
            minWidth: '100%',
            position: 'relative',
        },
        navigation_style: {
            nav_color: '--color-grey-5',
        },
    }

    // const data = useStaticQuery(query)
    return (
        <Layout type="blog" is_ppc_redirect={true}>
            <SEO title={localize('Blog')} description={localize('Blog like a boss')} no_index />
            <MainWrapper>
                <StaticQuery
                    query={graphql`
                        query MyQuery {
                            directus {
                                homepage_banners {
                                    thumbnail {
                                        id
                                        imageFile {
                                            id
                                            childImageSharp {
                                                gatsbyImageData
                                            }
                                        }
                                    }
                                    description
                                    subject
                                }
                            }
                        }
                    `}
                    render={(data) => (
                        <Carousel has_autoplay autoplay_interval={600000} {...settings}>
                            {console.log(data, '12')}
                            <Hero
                                // heroImage={data['hero_image_three']}
                                // title={data.author.name}
                                description={localize(
                                    'Today, financial markets are open to everyone, not just the financial elite. This ebook by Vince Stanzione teaches you how you can trade stocks just like the pros.',
                                )}
                            />
                        </Carousel>
                    )}
                />
            </MainWrapper>
            <RecentFeaturedPosts />
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
