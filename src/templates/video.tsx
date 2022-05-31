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
import { Mobile, Flex, SectionContainer, Desktop } from 'components/containers'
import { truncateString } from 'common/utility'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'
import { getTruncateLength } from 'pages/academy/blog/posts/preview'

type VideosTemplateProps = {
    data: AllVideosQuery
}

const VideoPlayer = styled(Vimeo)`
    width: 100%;
    height: 100%;

    > iframe {
        width: 1280px;
        height: 720px;
    }
`

const VideoTemplate = ({ data }: VideosTemplateProps) => {
    const [is_mobile] = useBrowserResize(992)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)
    const [is_mounted] = usePageLoaded()

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
                        <Background>
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
                            <HeroContainer>
                                {/* <InfoText mb="16px" size="14px">
                                    {video_data?.published_date &&
                                        convertDate(video_data?.published_date)}
                                </InfoText>
                                <ArticleTitle as="h1" type="page-title">
                                    {video_data?.video_title}
                                </ArticleTitle> */}
                                {/* <InfoText size="14px" mt="16px">
                                        {getMinRead(video_data?.blog_post)}
                                    </InfoText> */}
                                <Mobile breakpoint="laptop">
                                    <SideBarContainer fd="column" mr="126px" height="auto">
                                        <Flex
                                            fw="wrap"
                                            jc="flex-start"
                                            max-width="100%"
                                            width=" 100%"
                                        >
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
                                    {vimeo_id && <VideoPlayer video={vimeo_id} autoplay />}
                                </Desktop>
                            </HeroContainer>
                        </Background>

                        {/* <BodyContainer>
                            <LeftBodyContainerWrapper>
                                <Mobile breakpoint="laptop">
                                    {video_data?.author && (
                                        <Flex ai="center" jc="flex-start">
                                            <>
                                                {video_data?.author?.image && (
                                                    <WriterImage>
                                                        <QueryImage
                                                            data={
                                                                video_data?.author?.image?.imageFile
                                                            }
                                                            alt={
                                                                video_data?.author?.image
                                                                    ?.description || ''
                                                            }
                                                        />
                                                    </WriterImage>
                                                )}
                                            </>

                                            <Box>
                                                <WrittenbyText color="grey-5" size="12px">
                                                    {localize('Written by')}
                                                </WrittenbyText>
                                                <InfoText>
                                                    {localize(video_data?.author?.name)}
                                                </InfoText>
                                            </Box>
                                        </Flex>
                                    )}
                                </Mobile>
                                <Desktop breakpoint="laptop">
                                    <SideBarContainer fd="column" height="auto">
                                        <Flex
                                            jc="flex-start"
                                            mb="40px"
                                            fw="wrap"
                                            max-width="255px"
                                            width=" 100%"
                                        >
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
                                        {side_banner_data_details && (
                                            <Banner detailsObj={side_banner_data_details} />
                                        )}
                                        <DesktopWrapper>
                                            <SideSubscriptionBanner />
                                        </DesktopWrapper>
                                    </SideBarContainer>
                                </Desktop>
                            </LeftBodyContainerWrapper>
                            <RightBodyContainerWrapper>
                                <Flex fd="column" margin="0 auto" ai="center">
                                    <PreviewContainer
                                        dangerouslySetInnerHTML={{
                                            __html: video_data?.blog_post
                                                .replace(/<p><img /g, '<img ')
                                                .replace(/\/><\/p>/g, '/>'),
                                        }}
                                    />

                                    {footer_banner_details && (
                                        <Banner detailsObj={footer_banner_details} />
                                    )}

                                    {side_banner_data_details && (
                                        <MobileWrapper>
                                            <Flex mt="24px">
                                                <Banner detailsObj={side_banner_data_details} />
                                            </Flex>
                                        </MobileWrapper>
                                    )}
                                    <MobileWrapper>
                                        <SideSubscriptionBanner />
                                    </MobileWrapper>
                                </Flex>
                            </RightBodyContainerWrapper>
                        </BodyContainer> */}
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
