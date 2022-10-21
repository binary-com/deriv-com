import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Subscribe from '../components/_subscribe'
import { useDataFilter } from '../components/_utility'
import AllArticles from './_all-articles'
import { AllArticlesQuery } from 'types/graphql.types'
import Layout from 'components/layout/layout'
import { SEO, Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import HeroImage from 'images/common/blog/deriv-blog.png'
import device from 'themes/device'

const SmallContainer = styled(Container)`
    width: 62%;
    max-width: 734px;
    flex-direction: column;

    @media ${device.desktopL} {
        max-width: 1000px;
    }
    @media ${device.tabletS} {
        width: calc(100% - 32px);
    }
`

const Hero = styled(Flex)`
    height: 40rem;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    background: var(--color-white);
    background-image: url(${HeroImage});
    background-size: cover;
    background-position: center;
    border-radius: 8px;

    @media ${device.desktopL} {
        max-width: 1600px;
    }
    @media ${device.tabletL} {
        height: 348px;
        width: calc(100% - 32px);
    }
`

type ArticlesPageProps = {
    data: AllArticlesQuery
}

export type ArticleDataType = AllArticlesQuery['directus']['blog']

const ArticlesPage = ({ data }: ArticlesPageProps) => {
    const article_data = useDataFilter(data.directus.blog)

    const meta_attributes = {
        og_title: 'Trading tips, guides, and more.',
        og_description:
            'Educational content at your fingertips – everything you need to know to start trading or upgrade your trading skills.',
    }
    return (
        <Layout type="academy" margin_top={'14.4'}>
            <SEO
                title={localize('Articles, trading guide and resources | Deriv')}
                description={localize(
                    "If you are looking for trading guide or tutorials, visit Deriv's trading academy and learn how to trade online.",
                )}
                meta_attributes={meta_attributes}
            />
            <Flex pt="40px">
                <Hero jc="center" ai="center">
                    <SmallContainer>
                        <Header
                            as="h1"
                            type="subtitle-1"
                            color="white"
                            weight="regular"
                            align="left"
                        >
                            {localize('Blog')}
                        </Header>
                        <Header
                            as="h2"
                            type="heading-2"
                            color="white"
                            align="left"
                            tabletL={{ mt: '8px' }}
                        >
                            {localize('The latest articles and resources')}
                        </Header>
                    </SmallContainer>
                </Hero>
            </Flex>
            {article_data && <AllArticles article_data={article_data} />}
            <Container pb="80px" tabletL={{ pb: '40px' }}>
                <Flex direction="column" ai="flex-start" jc="space-between">
                    <Subscribe />
                </Flex>
            </Container>
        </Layout>
    )
}

export default WithIntl()(ArticlesPage)

export const query = graphql`
    query AllArticles {
        directus {
            blog(
                filter: { status: { _eq: "published" }, test_data: { _eq: false } }
                sort: "-published_date"
                limit: -1
            ) {
                id
                main_image {
                    id
                    description
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(width: 600, aspectRatio: 1.82)
                        }
                    }
                }
                slug
                featured
                visibility
                tags {
                    id
                    tags_id {
                        tag_name
                    }
                }
                blog_title
                blog_description
                blog_post
                published_date
            }
        }
    }
`
