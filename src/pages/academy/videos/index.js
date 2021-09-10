import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Subscribe from '../components/_subscribe'
import AllVideos from './_all-videos'
import Layout from 'components/layout/layout'
import { SEO, Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import HeroImage from 'images/common/blog/video-tutorials.png'
import device from 'themes/device'
import { DerivStore } from 'store'

const SmallContainer = styled(Container)`
    width: 60%;
    max-width: 62.5rem;
    flex-direction: column;

    @media ${device.desktop} {
        max-width: 800px;
    }
    @media ${device.laptopL} {
        width: 60%;
    }
    @media ${device.desktopL} {
        max-width: 1000px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

const Hero = styled(Flex)`
    height: 40rem;
    background: var(--color-black);
    background-image: url(${HeroImage});
    background-size: cover;
    background-position: center;

    @media ${device.tabletL} {
        height: 348px;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        margin-top: 16px;
    }
`

const VideosPage = ({ data }) => {
    const { is_eu_country } = React.useContext(DerivStore)
    const video_data = is_eu_country
        ? data.directus.videos.filter((item) => item.hide_for_eu == false)
        : data.directus.videos

    return (
        <Layout>
            <SEO
                title={localize('Latest videos, tutorials, webinars for trading | Deriv')}
                description={localize(
                    "Learn how to trade using our trading videos and tutorials at Deriv's online trading academy.",
                )}
            />
            <Hero jc="center" ai="center">
                <SmallContainer>
                    <Header as="h2" type="heading-3" color="white" weight="400" align="left">
                        Video tutorials
                    </Header>
                    <StyledHeader as="h2" type="heading-2" color="white" align="left">
                        Our latest videos and webinars
                    </StyledHeader>
                </SmallContainer>
            </Hero>
            {video_data && <AllVideos video_data={video_data} />}
            <Container pb="80px" tabletL={{ pb: '40px' }}>
                <Flex direction="column" ai="flex-start" jc="space-between">
                    <Subscribe />
                </Flex>
            </Container>
        </Layout>
    )
}

VideosPage.propTypes = {
    data: PropTypes.object,
}
export default WithIntl()(VideosPage)

export const query = graphql`
    query AllVideosQuery {
        directus {
            videos(filter: { status: { _eq: "published" } }, sort: "- published_date") {
                video_id
                video_slug
                video_title
                published_date
                video_description
                video_duration
                hide_for_eu
                tags {
                    tags_id {
                        tag_name
                        id
                    }
                }
                video_file {
                    id
                }
                video_thumbnail {
                    id
                    imageFile {
                        id
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    }
`
