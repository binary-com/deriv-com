import React, { useEffect, useState, useRef, useContext } from 'react'
import { graphql, navigate } from 'gatsby'
import Vimeo from '@u-wave/react-vimeo'
import styled from 'styled-components'
import {
    BreadcrumbsWrapper,
    StyledBreadcrumbsLink,
    StyledBreadcrumbsTitle,
    StyledBreadcrumbsContainer,
    Scrollbar,
    ProgressContainer,
    ProgressBar,
} from '../pages/academy/blog/posts/_style'
import SocialSharing from '../pages/academy/components/_social-sharing'
import { AllVideosQuery } from 'types/graphql.types'
import { WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { Mobile, Flex, SectionContainer, Desktop, Container, SEO } from 'components/containers'
import { truncateString } from 'common/utility'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'
import Eye from 'images/svg/eye.svg'
import { getTruncateLength } from 'pages/academy/blog/posts/preview'
import device from 'themes/device'
import { DerivStore } from 'store'
import { QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'

type VideosTemplateProps = {
    data: AllVideosQuery
}

const StickyBreadCrumbsWrapper = styled(Flex)`
    background: ${(props) => (props.scroll ? 'var(--color-grey-8)' : 'var(--color-white)')};
    position: ${(props) => (props.scroll ? 'fixed' : 'unset')};
    top: ${(props) => (props.scroll ? '70px' : 'unset')};
    z-index: ${(props) => (props.scroll ? '1' : 'unset')};
    height: 70px;
    border-top: 1px solid var(--color-grey-8);

    @media ${device.desktopL} {
        top: ${(props) => (props.scroll ? '82px' : 'unset')};
        height: 74px;
    }

    @media ${device.laptop} {
        height: 66px;
        top: 66px;
    }

    @media ${device.tabletL} {
        top: ${(props) => (props.scroll ? '55px' : 'unset')};
        height: 66px;
    }
`

const VideoAndRelatedContainer = styled(Flex)`
    flex-direction: row;

    @media ${device.laptopM} {
        flex-direction: column;
        margin: auto;
    }
`

const DesktopContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 0 80px;
`

const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f5f7fa;
    width: 791px;
    height: 615px;
    border-radius: 8px;

    @media ${device.laptopM} {
        margin-bottom: 20px;
    }
    @media (max-width: 800px) {
        width: 576px;
        height: 480px;
    }
    @media ${device.tabletS} {
        width: 328px;
        height: 385px;
    }
`

const RelatedVideos = styled.div`
    background-color: #f5f7fa;
    width: 384px;
    height: 615px;
    border-radius: 8px;
    margin-left: 20px;
    padding: 1.5rem;

    @media ${device.laptopM} {
        margin-left: 0;
        width: 791px;
        height: 387px;
    }
    @media (max-width: 800px) {
        width: 576px;
        height: 615px;
    }
    @media ${device.tabletS} {
        width: 328px;
    }
`

const RelatedVideosContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 5px;

    @media ${device.laptopM} {
        flex-direction: row;
        flex-wrap: wrap;
    }
    @media (max-width: 800px) {
        flex-direction: column;
        flex-wrap: nowrap;
    }
`

const RelatedVideoCard = styled.div`
    cursor: pointer;
    display: flex;
    width: 352px;
    max-width: 352px;
    height: 96px;
    margin: 8px 0;

    @media (max-width: 800px) {
        width: 576px;
    }

    @media ${device.tabletS} {
        width: 328px;
        max-width: 328px;
    }
`

const RelatedVideoImage = styled(QueryImage)`
    width: 160px;
    height: 96px;
    border-radius: 2%;
`

const RelatedVideoDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

const RelatedVideoTitle = styled.h3`
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    padding-bottom: 5px;
`

const RelatedVideoDateAndDuration = styled.div`
    display: flex;
`

const VideoPlayer = styled(Vimeo)`
    > iframe {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        width: 791px;
        height: 445px;
    }

    @media (max-width: 800px) {
        > iframe {
            width: 576px;
            height: 324px;
        }
    }
    @media ${device.tabletS} {
        > iframe {
            width: 329px;
            height: 185px;
        }
    }
`

const VideoDetailsContainer = styled.div`
    padding: 2rem;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;

    @media (max-width: 800px) {
        font-size: 18px;
        line-height: 26px;
    }
`

const VideoDescription = styled.p`
    color: var(--color-grey);
    font-size: 16px;
    padding: 1.5rem 0;
    max-width: 684px;
    line-height: 24px;

    @media ${device.tabletS} {
        font-size: 14px;
        line-height: 20px;
    }
`

const VideoDetails = styled.div`
    display: flex;
    align-self: end;
    bottom: 0;
`
const GreyText = styled.p`
    color: var(--color-grey);
    font-size: 14px;
    padding: 0 0.6rem;

    @media ${device.tabletS} {
        font-size: 12px;
    }
`
const GreyTextSmall = styled.p`
    color: var(--color-grey);
    font-size: 12px;
    padding: 0 0.2rem;
`

const AllVideosButton = styled(LinkButton)`
    margin: 30px auto 0;
    width: 130px;

    &:hover {
        cursor: pointer;
    }
    @media ${device.laptopM} {
        width: 100%;
        margin: 30px auto 0;
    }
`

const VideoTemplate = ({ data }: VideosTemplateProps) => {
    const { academy_data } = useContext(DerivStore)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)
    const [is_mounted] = usePageLoaded()
    const [view_count, setViewCount] = useState(null)

    useEffect(() => {
        if (is_mounted) {
            handleScroll()
            window.scrollTo(0, 0)
        }
    }, [is_mounted])

    const barElement = useRef(null)

    const scrollFunc = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (winScroll / height) * 130
        barElement.current.style.width = scrolled + '%'
    }

    const handleScroll = () => {
        const currentScrollPos = window.scrollY
        setPrevScrollPos(currentScrollPos)
        setVisible(currentScrollPos > 72)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollFunc, { passive: true })
        return () => {
            window.removeEventListener('scroll', scrollFunc)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos, visible, handleScroll])

    const all_videos = academy_data.videos
    const video_data = data.directus.videos[0]
    const video_title = video_data?.video_title
    const video_description = video_data?.video_description
    const published_date = video_data?.published_date
    const video_duration = video_data?.video_duration
    const vimeo_id = video_data?.vimeo_id
    const video_tag = video_data?.tags[0]?.tags_id?.tag_name

    const getFiveRelatedVideos = () => {
        // Find related videos by tag
        const findRelatedVideoByTag = () =>
            all_videos.filter((video) =>
                video?.tags?.some((tag) => tag.tags_id?.tag_name === video_tag),
            )

        // Function to remove current video from a video list
        const removeCurrentVideoFromArray = (video_list) =>
            video_list.filter((video) => video.video_title !== video_title)

        // Merge videos by tag with all other videos
        const merged_two_arrays = findRelatedVideoByTag().concat(all_videos)

        // Remove duplicate items from merged array
        const remove_duplicate_from_array = [...new Set(merged_two_arrays)]

        // Remove current video from video list
        const final_array = removeCurrentVideoFromArray(remove_duplicate_from_array)

        if (final_array.length <= 5) {
            return final_array
        }

        // If video list array has more than 5 items slice it
        return final_array.slice(0, 5)
    }

    useEffect(() => {
        const url = `https://vimeo.com/api/v2/video/${vimeo_id}.json`

        const fetchData = async () => {
            const response = await fetch(url)
            const json = await response.json()
            setViewCount(json[0]?.stats_number_of_plays)
        }

        fetchData()
    }, [vimeo_id])

    return (
        <Layout type="academy" margin_top={'14.4'}>
            <SEO description={video_description} title={video_title} />
            <>
                {is_mounted && (
                    <SectionContainer padding="0" position="relative">
                        <Desktop breakpoint="laptop">
                            <StickyBreadCrumbsWrapper scroll={visible}>
                                <BreadcrumbsWrapper scroll={visible}>
                                    <StyledBreadcrumbsContainer>
                                        <StyledBreadcrumbsLink to="/academy/" color="grey-5">
                                            Academy
                                        </StyledBreadcrumbsLink>
                                        <img
                                            src={RightArrow}
                                            height="16"
                                            width="16"
                                            style={{ marginRight: '12px' }}
                                        />
                                        <StyledBreadcrumbsLink to="/academy/videos/" color="grey-5">
                                            All Videos
                                        </StyledBreadcrumbsLink>
                                        <img src={RightArrow} height="16" width="16" />
                                        <StyledBreadcrumbsTitle>
                                            {video_title}
                                        </StyledBreadcrumbsTitle>
                                        <SocialSharing />
                                    </StyledBreadcrumbsContainer>
                                </BreadcrumbsWrapper>
                                <Scrollbar scroll={visible}>
                                    <ProgressContainer>
                                        <ProgressBar ref={barElement}></ProgressBar>
                                    </ProgressContainer>
                                </Scrollbar>
                            </StickyBreadCrumbsWrapper>
                        </Desktop>
                        <Mobile breakpoint="laptop">
                            <StickyBreadCrumbsWrapper scroll={visible}>
                                <BreadcrumbsWrapper scroll={visible}>
                                    <StyledBreadcrumbsContainer>
                                        <StyledBreadcrumbsLink to="/academy/videos/" color="grey-5">
                                            All Videos
                                        </StyledBreadcrumbsLink>
                                        <img src={RightArrow} height="16" width="16" />
                                        <StyledBreadcrumbsTitle>
                                            {truncateString(video_title, getTruncateLength())}
                                        </StyledBreadcrumbsTitle>
                                        <SocialSharing />
                                    </StyledBreadcrumbsContainer>
                                </BreadcrumbsWrapper>
                                <Scrollbar scroll={visible}>
                                    <ProgressContainer>
                                        <ProgressBar ref={barElement}></ProgressBar>
                                    </ProgressContainer>
                                </Scrollbar>
                            </StickyBreadCrumbsWrapper>
                        </Mobile>

                        <Container>
                            {/* <Mobile breakpoint="laptop">
                                <SideBarContainer fd="column" mr="126px" height="auto">
                                    <Flex fw="wrap" jc="flex-start" max-width="100%" width=" 100%">
                                        {video_data?.tags.map((tag) => {
                                            return (
                                                <Tag
                                                    key={tag?.tags_id?.id}
                                                    onClick={() =>
                                                        handleTag(tag?.tags_id?.tag_name)
                                                    }
                                                >
                                                    {tag?.tags_id?.tag_name}
                                                </Tag>
                                            )
                                        })}
                                    </Flex>
                                </SideBarContainer>
                            </Mobile> */}
                            <DesktopContainer>
                                <VideoAndRelatedContainer>
                                    <VideoContainer>
                                        <VideoPlayer video={vimeo_id} />
                                        <VideoDetailsContainer>
                                            <Title>{video_title}</Title>
                                            <VideoDescription>{video_description}</VideoDescription>
                                            <VideoDetails>
                                                <img src={Eye} height="16" width="16" />
                                                <GreyText>{view_count} views</GreyText>
                                                <GreyText>•</GreyText>
                                                <GreyText>{published_date}</GreyText>
                                                <GreyText>•</GreyText>
                                                <GreyText>{video_duration} Min</GreyText>
                                            </VideoDetails>
                                        </VideoDetailsContainer>
                                    </VideoContainer>
                                    <RelatedVideos>
                                        <Title>Related Videos</Title>
                                        <RelatedVideosContainer>
                                            {getFiveRelatedVideos().map((video) => (
                                                <RelatedVideoCard
                                                    key={video_title}
                                                    onClick={() => {
                                                        navigate(
                                                            `/academy/videos/${video?.video_slug}`,
                                                        )
                                                    }}
                                                >
                                                    <RelatedVideoImage
                                                        style={{ borderRadius: '7px' }}
                                                        data={
                                                            video?.video_thumbnail?.imageFile
                                                                ?.childImageSharp?.gatsbyImageData
                                                        }
                                                        width="161px"
                                                        height="96px"
                                                    />
                                                    <RelatedVideoDescription>
                                                        <RelatedVideoTitle>
                                                            {video?.video_title}
                                                        </RelatedVideoTitle>
                                                        <RelatedVideoDateAndDuration>
                                                            <GreyTextSmall>
                                                                {video?.published_date}
                                                            </GreyTextSmall>
                                                            <GreyTextSmall>•</GreyTextSmall>
                                                            <GreyTextSmall>
                                                                {video?.video_duration}
                                                            </GreyTextSmall>
                                                        </RelatedVideoDateAndDuration>
                                                    </RelatedVideoDescription>
                                                </RelatedVideoCard>
                                            ))}
                                        </RelatedVideosContainer>
                                    </RelatedVideos>
                                </VideoAndRelatedContainer>
                                <AllVideosButton tertiary to="/academy/videos/">
                                    See all videos
                                </AllVideosButton>
                            </DesktopContainer>
                        </Container>
                    </SectionContainer>
                )}
            </>
        </Layout>
    )
}

export default WithIntl()(VideoTemplate)

// Query our videos by slug
export const query = graphql`
    query Video($slug: String) {
        directus {
            videos(filter: { video_slug: { _eq: $slug } }) {
                video_title
                published_date
                video_description
                video_duration
                featured
                vimeo_id
                video_thumbnail {
                    id
                    title
                    imageFile {
                        id
                        childImageSharp {
                            gatsbyImageData(width: 382, aspectRatio: 1.82)
                        }
                    }
                }
                video_file {
                    id
                }
                tags {
                    tags_id {
                        tag_name
                    }
                }
            }
        }
    }
`
