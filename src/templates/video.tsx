import React, { useEffect, useState, useRef } from 'react'
import { graphql } from 'gatsby'
import Vimeo from '@u-wave/react-vimeo'
import styled from 'styled-components'
import {
    Background,
    HeroContainer,
    BreadcrumbsWrapper,
    SideBarContainer,
    Tag,
    StickyBreadCrumbsWrapper,
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
import IncreasingArrow from 'images/svg/tools/increasing-arrow.svg'
import { getTruncateLength } from 'pages/academy/blog/posts/preview'

type VideosTemplateProps = {
    data: AllVideosQuery
}

const VideoPlayer = styled(Vimeo)`
    > iframe {
        width: 720px;
        height: 480px;
    }

    @media (min-width: 1280px) {
        > iframe {
            width: 1280px;
            height: 720px;
        }
    }
`

const VideoTitle = styled.h1`
    font-size: 2.3rem;
    padding: 2rem 0;
    font-weight: 700;
`

const VideoDescription = styled.p`
    color: var(--color-grey);
    font-size: 1.6rem;
    padding-bottom: 1.5rem;
    max-width: 996px;
    line-height: 2.1rem;
`

const VideoDetails = styled.div`
    display: flex;
`
const GreyText = styled.p`
    color: var(--color-grey);
    font-size: 1.6rem;
    padding: 0 0.6rem;
`

const VideoTemplate = ({ data }: VideosTemplateProps) => {
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

    const video_data = data.directus.videos[0]
    const video_title = video_data?.video_title
    const vimeo_id = video_data?.vimeo_id

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
                        <Container padding="10px 40px">
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
                                <>
                                    {/* {!vimeo_id && <VideoLoader />} */}
                                    {vimeo_id && <VideoPlayer video={vimeo_id} />}
                                    <VideoTitle>{video_data?.video_title}</VideoTitle>
                                    <VideoDescription>
                                        {video_data?.video_description}
                                    </VideoDescription>
                                    <VideoDetails>
                                        <img src={IncreasingArrow} height="16" width="16" />
                                        <GreyText>{view_count} views</GreyText>
                                        <GreyText>•</GreyText>
                                        <GreyText>{video_data?.published_date}</GreyText>
                                    </VideoDetails>
                                </>
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
