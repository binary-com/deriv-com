import React from 'react'
import { graphql } from 'gatsby'
import Subscribe from './components/_subscribe'
import RecentFeaturedPosts from './_recent-featured-posts'
import VideoBanner from './_video-banner'
import MarketNews from './components/_market-news'
import { AcademyIndexFragment } from 'types/graphql.types'
import Layout from 'components/layout/layout'
import { Container, SEO, Flex } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import { useCountryRule } from 'components/hooks/use-country-rule'
import AcademyMainCarousel from 'features/academy/main_carousel'

export const query = graphql`
    query {
        ...AcademyIndex
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
            <AcademyMainCarousel banner_data={homepage_banner_data} />
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
