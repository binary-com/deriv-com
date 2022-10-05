import React from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import Subscribe from './components/_subscribe'
import RecentFeaturedPosts from './_recent-featured-posts'
import VideoBanner from './_video-banner'
import Hero from './components/_hero'
import MarketNews from './components/_market-news'
import { AcademyIndexFragment } from 'types/graphql.types'
import Layout from 'components/layout/layout'
import { Container, SEO, Flex } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import { Carousel } from 'components/elements'
import device from 'themes/device'
import { useCountryRule } from 'components/hooks/use-country-rule'

export const query = graphql`
    query {
        ...AcademyIndex
    }
`

const MainWrapper = styled.div`
    display: flex;
    width: 90%;
    background-color: var(--color-white);
    flex-direction: column;
    overflow: hidden;
    max-width: 1200px;
    padding-top: 40px;
    margin: 0 auto;

    @media ${device.desktopL} {
        max-width: 1600px;
    }
`

type DerivBlogProps = {
    data: AcademyIndexFragment
}

export type RecentDataType = AcademyIndexFragment['directus']['recent']

export type FeaturedDataType = AcademyIndexFragment['directus']['featured']

export type FeaturedVideoListDataType = AcademyIndexFragment['directus']['featured_video']

export type NonFeaturedVideoListDataType = AcademyIndexFragment['directus']['videos']

export type MarketNewsDataType = AcademyIndexFragment['directus']['market_news']

const DerivBlog = ({ data }: DerivBlogProps) => {
    const { is_eu, is_uk } = useCountryRule()

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
            borderRadius: '8px',
            overflow: 'hidden',
        },
        slide_style: {
            minWidth: '100%',
            position: 'relative',
        },
        navigation_style: {
            nav_color: 'white',
            height: '0',
        },
        navigation_css: css`
            position: relative;
            width: 100%;
            bottom: 40px;
            padding-left: 16px;
            justify-content: left;
            @media screen and (min-width: 785px) {
                padding-left: 102px;
            }
        `,
    }

    let market_news_data = data.directus.market_news
    let recent_data = data.directus.recent
    let featured_data = data.directus.featured
    let homepage_banner_data = data.directus.homepage_banners
    let non_featured_video_list_data = data.directus.videos
    let featured_video_list_data = data.directus.featured_video

    const {
        market_news_eu,
        recent_eu,
        featured_eu,
        homepage_banners_eu,
        videos_eu,
        featured_video_eu,
        market_news_uk,
        recent_uk,
        featured_uk,
        homepage_banners_uk,
        videos_uk,
        featured_video_uk,
    } = data.directus

    if (is_eu) {
        market_news_data = market_news_eu
        recent_data = recent_eu
        featured_data = featured_eu
        homepage_banner_data = homepage_banners_eu
        non_featured_video_list_data = videos_eu
        featured_video_list_data = featured_video_eu
    } else if (is_uk) {
        market_news_data = market_news_uk
        recent_data = recent_uk
        featured_data = featured_uk
        homepage_banner_data = homepage_banners_uk
        non_featured_video_list_data = videos_uk
        featured_video_list_data = featured_video_uk
    }

    //arranges homepage banners in ascendingly on order value
    homepage_banner_data.sort((a, b) => parseInt(a.order) - parseInt(b.order))

    return (
        <Layout type="academy" margin_top={'14.4'}>
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
                            <Flex key={page_data.id}>
                                <Hero
                                    imageData={
                                        page_data.image?.imageFile.childImageSharp.gatsbyImageData
                                    }
                                    imageAlt={page_data?.image?.description}
                                    title={page_data.heading}
                                    description={page_data.sub_heading}
                                    href={page_data.link}
                                    cta_text={page_data.button_text}
                                />
                            </Flex>
                        )
                    })}
                </Carousel>
            </MainWrapper>
            <RecentFeaturedPosts recent_data={recent_data} featured_data={featured_data} />
            <VideoBanner
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

export default WithIntl()(DerivBlog)
