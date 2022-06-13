import React, { useEffect, useState, useRef, useContext } from 'react'
import { graphql, navigate } from 'gatsby'
import Vimeo from '@u-wave/react-vimeo'
import styled from 'styled-components'
import {
    BreadcrumbsWrapper,
    SideBarContainer,
    Tag,
    StyledBreadcrumbsLink,
    StyledBreadcrumbsTitle,
    StyledBreadcrumbsContainer,
    Scrollbar,
    ProgressContainer,
    ProgressBar,
} from '../pages/academy/blog/posts/_style'
import SocialSharing from '../pages/academy/components/_social-sharing'
import { handleTag } from 'pages/academy/components/utility'
import { AllVideosQuery } from 'types/graphql.types'
import { WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { Mobile, Flex, SectionContainer, Desktop, Container } from 'components/containers'
import { truncateString } from 'common/utility'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
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

const DesktopContainer = styled.div`
    display: flex;
    padding: 30px 0 80px;
`

const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f5f7fa;
    width: 791px;
    height: 650px;
    border-radius: 8px;
`

const RelatedVideos = styled.div`
    background-color: #f5f7fa;
    width: 384px;
    height: 650px;
    border-radius: 8px;
    margin-left: 20px;
    position: relative;
`

const RelatedVideosContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
`

const RelatedVideoCard = styled.div`
    cursor: pointer;
    display: flex;
    width: 352px;
    max-width: 352px;
    height: 96px;
    margin: 7px 0;
`

const RelatedVideoImage = styled(QueryImage)`
    width: 160px;
    height: 96px;
    border-radius: 5%;
`

const RelatedVideoDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
        width: 720px;
        height: 480px;
    }

    @media (min-width: 1280px) {
        > iframe {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            width: 791px;
            height: 445px;
        }
    }
`

const VideoDetailsContainer = styled.div`
    padding: 2rem;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
`

const VideoDescription = styled.p`
    color: var(--color-grey);
    font-size: 16px;
    padding: 1.5rem 0;
    max-width: 684px;
    line-height: 2.1rem;
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
`
const GreyTextSmall = styled.p`
    color: var(--color-grey);
    font-size: 12px;
    padding: 0 0.2rem;
`

const AllVideosButton = styled(LinkButton)`
    position: absolute;
    bottom: 12px;
    left: 16px;

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
    const [is_mobile] = useBrowserResize(992)
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
    const vimeo_id = video_data?.vimeo_id
    const video_tag = video_data?.tags[0]?.tags_id?.tag_name

    const findRelatedVideos = () =>
        all_videos.filter((video) =>
            video?.tags?.some((tag) => tag.tags_id?.tag_name === video_tag),
        )

    useEffect(() => {
        const url = `https://vimeo.com/api/v2/video/${vimeo_id}.json`

        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const json = await response.json()
                setViewCount(json[0]?.stats_number_of_plays)
            } catch (error) {
                console.log('error', error)
            }
        }

        fetchData()
    }, [vimeo_id])

    return (
        <Layout type="academy" margin_top={'14.4'}>
            {/* <SEO
                description={meta_description}
                title={meta_title}
                meta_attributes={meta_attributes}
                no_index={test_data}
            /> */}
            <>
                {is_mounted && (
                    <SectionContainer padding="0" position="relative">
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
                                        {is_mobile
                                            ? truncateString(video_title, getTruncateLength())
                                            : video_title}
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
                        <Container>
                            <Mobile breakpoint="laptop">
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
                            </Mobile>
                            <Desktop breakpoint="laptop">
                                <DesktopContainer>
                                    <VideoContainer>
                                        <VideoPlayer video={vimeo_id} />
                                        <VideoDetailsContainer>
                                            <Title>{video_data?.video_title}</Title>
                                            <VideoDescription>
                                                {video_data?.video_description}
                                            </VideoDescription>
                                            <VideoDetails>
                                                <img src={Eye} height="16" width="16" />
                                                <GreyText>{view_count} views</GreyText>
                                                <GreyText>•</GreyText>
                                                <GreyText>{video_data?.published_date}</GreyText>
                                                <GreyText>•</GreyText>
                                                <GreyText>
                                                    {video_data?.video_duration} Min
                                                </GreyText>
                                            </VideoDetails>
                                        </VideoDetailsContainer>
                                    </VideoContainer>
                                    <RelatedVideos>
                                        <RelatedVideosContainer>
                                            <Title>Related Videos</Title>
                                            {findRelatedVideos()
                                                .slice(0, 5)
                                                .map((video) => (
                                                    <RelatedVideoCard
                                                        key={video?.video_title}
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
                                                                    ?.childImageSharp
                                                                    ?.gatsbyImageData
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
                                            <AllVideosButton tertiary to="/academy/videos/">
                                                See all videos
                                            </AllVideosButton>
                                        </RelatedVideosContainer>
                                    </RelatedVideos>
                                </DesktopContainer>
                            </Desktop>
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
