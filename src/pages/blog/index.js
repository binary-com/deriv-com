import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Subscribe from './components/_subscribe'
import RecentFeaturedPosts from './_recent-featured-posts'
import DVideoBanner from './video-banner'
import Hero from './components/_hero'
import Layout from 'components/layout/layout'
import { Container, SEO, Flex } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import { Carousel, QueryImage } from 'components/elements'

const MainWrapper = styled(Flex)`
    background-color: var(--color-white);
    flex-direction: column;
    overflow: hidden;
`
export const query = graphql`
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
`

const DerivBlog = ({ data }) => {
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
    const homepage_banner_data = data.directus.homepage_banners
    return (
        <Layout type="blog" is_ppc_redirect={true}>
            <SEO title={localize('Blog')} description={localize('Blog like a boss')} no_index />
            <MainWrapper>
                <Carousel has_autoplay autoplay_interval={6000} {...settings}>
                    {/* {homepage_banner_data.map((page_data)=>{ */}
                    <Hero
                        heroImage={
                            <QueryImage
                                data={
                                    homepage_banner_data[0].image.imageFile.childImageSharp
                                        .gatsbyImageData
                                }
                                alt={homepage_banner_data[0].image.description || ''}
                            />
                        }
                        title={homepage_banner_data[0].heading}
                        description={homepage_banner_data[0].sub_heading}
                    />
                    <Hero
                        heroImage={
                            <QueryImage
                                data={
                                    homepage_banner_data[1].image.imageFile.childImageSharp
                                        .gatsbyImageData
                                }
                                alt={homepage_banner_data[1].image.description || ''}
                            />
                        }
                        title={homepage_banner_data[1].heading}
                        description={homepage_banner_data[1].sub_heading}
                    />
                    {/* })} */}
                </Carousel>
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

DerivBlog.propTypes = {
    data: PropTypes.object,
}

export default WithIntl()(DerivBlog)
