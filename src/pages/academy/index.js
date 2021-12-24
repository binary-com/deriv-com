import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Subscribe from './components/_subscribe'
import RecentFeaturedPosts from './_recent-featured-posts'
import DVideoBanner from './_video-banner'
import Hero from './components/_hero'
import MarketNews from './components/_markets-news'
import Layout from 'components/layout/layout'
import { Container, SEO, Flex } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import { Carousel } from 'components/elements'
import { DerivStore } from 'store'

export const query = graphql`
    query {
        ...academyQuery
    }
`

const MainWrapper = styled(Flex)`
    background-color: var(--color-white);
    flex-direction: column;
    overflow: hidden;
`

const StyledLink = styled.a`
    text-decoration: none;
`

const DerivBlog = ({ data }) => {
    const meta_attributes = {
        og_title: 'Blogs, video tutorials, and more | Deriv Academy',
        og_description: 'Your one-stop online trading learning hub.',
    }

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
            nav_color: '--color-white',
        },
    }

    const { is_eu_country, is_uk_country } = React.useContext(DerivStore)

    let market_news_data,
        recent_data,
        featured_data,
        homepage_banner_data,
        non_featured_video_list_data,
        featured_video_list_data

    if (is_eu_country) {
        market_news_data = data.directus.market_news_eu
        recent_data = data.directus.recent_eu
        featured_data = data.directus.featured_eu
        homepage_banner_data = data.directus.homepage_banners_eu
        non_featured_video_list_data = data.directus.videos_eu
        featured_video_list_data = data.directus.featured_video_eu
    } else if (is_uk_country) {
        market_news_data = data.directus.market_news_uk
        recent_data = data.directus.recent_uk
        featured_data = data.directus.featured_uk
        homepage_banner_data = data.directus.homepage_banners_uk
        non_featured_video_list_data = data.directus.videos_uk
        featured_video_list_data = data.directus.featured_video_uk
    } else {
        market_news_data = data.directus.market_news
        recent_data = data.directus.recent
        featured_data = data.directus.featured
        homepage_banner_data = data.directus.homepage_banners
        non_featured_video_list_data = data.directus.videos
        featured_video_list_data = data.directus.featured_video
    }

    //arranges homepage banners in ascendingly on order value
    homepage_banner_data.sort((a, b) => parseInt(a.order) - parseInt(b.order))

    return (
        <Layout type="academy">
            <SEO
                title={localize('Articles, trading guide and resources | Deriv')}
                description={localize(
                    "If you are looking for trading guide or tutorials, visit Deriv's trading academy and learn how to trade online.",
                )}
                meta_attributes={meta_attributes}
            />
            <MainWrapper>
                <Carousel has_autoplay autoplay_interval={6000} {...settings}>
                    {homepage_banner_data.map((page_data) => {
                        return (
                            <StyledLink
                                key={page_data.id}
                                href={page_data.link}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Hero
                                    imageData={page_data.desktop_hero.imageFile}
                                    imageAlt={page_data?.desktop_hero?.description}
                                    title={page_data.heading}
                                    description={page_data.sub_heading}
                                />
                            </StyledLink>
                        )
                    })}
                </Carousel>
            </MainWrapper>
            <RecentFeaturedPosts recent_data={recent_data} featured_data={featured_data} />
            <DVideoBanner
                featured_video_list_data={featured_video_list_data}
                non_featured_video_list_data={non_featured_video_list_data}
            />
            <MarketNews data={market_news_data} />
            <Container>
                <Flex
                    direction="column"
                    ai="flex-start"
                    jc="space-between"
                    mb="80px"
                    tabletL={{ marginBottom: '40px' }}
                >
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
