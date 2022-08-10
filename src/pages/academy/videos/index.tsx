import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Subscribe from '../components/_subscribe'
import { useDataFilter } from '../components/_utility'
import AllVideos from './_all-videos'
import { redirectWithParamReference, queryParams } from 'common/utility'
import { AllVideosQuery } from 'types/graphql.types'
import Layout from 'components/layout/layout'
import { SEO, Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import HeroImage from 'images/common/blog/video-tutorials.png'
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
        border-radius: 4px;
    }
`

type VideosPageProps = {
    data: AllVideosQuery
}

export type VideoDataType = AllVideosQuery['directus']['videos']

const VideosPage = ({ data }: VideosPageProps) => {
    // We need this to redirect users to the new videos page if ever they are accessing the old video link
    React.useEffect(() => {
        const video_title = queryParams.get('t')

        if (video_title) {
            redirectWithParamReference('/academy/videos', 't')
        }
    }, [])

    const video_data = useDataFilter(data.directus.videos)

    const meta_attributes = {
        og_title: 'Platform tours, webinars, and more.',
        og_description: 'Our products and services explained in detail.',
    }
    return (
        <Layout type="academy" margin_top={'14.4'}>
            <SEO
                title={localize('Latest videos, tutorials, webinars for trading | Deriv')}
                description={localize(
                    "Learn how to trade using our trading videos and tutorials at Deriv's online trading academy.",
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
                            Video tutorials
                        </Header>
                        <Header
                            as="h2"
                            type="heading-2"
                            color="white"
                            align="left"
                            tabletL={{ mt: '8px' }}
                        >
                            Our latest videos and webinars
                        </Header>
                    </SmallContainer>
                </Hero>
            </Flex>
            {video_data && <AllVideos video_data={video_data} />}
            <Container pb="80px" tabletL={{ pb: '40px' }}>
                <Flex direction="column" ai="flex-start" jc="space-between">
                    <Subscribe />
                </Flex>
            </Container>
        </Layout>
    )
}

export default WithIntl()(VideosPage)

export const query = graphql`
    query AllVideos {
        directus {
            videos(filter: { status: { _eq: "published" } }, sort: "- published_date") {
                video_slug
                video_title
                published_date
                video_description
                video_duration
                visibility
                tags {
                    tags_id {
                        tag_name
                        id
                    }
                }
                video_thumbnail {
                    id
                    imageFile {
                        id
                        childImageSharp {
                            gatsbyImageData(width: 382, aspectRatio: 1.82)
                        }
                    }
                }
            }
        }
    }
`
