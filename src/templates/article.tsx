import React, { useEffect, useState, useRef, useCallback } from 'react'
import { graphql } from 'gatsby'
import {
    ArticleTitle,
    Background,
    HeroContainer,
    BreadcrumbsWrapper,
    HeroLeftWrapper,
    HeroRightWrapper,
    HeroImageContainer,
    InfoText,
    WriterImage,
    WrittenbyText,
    BodyContainer,
    LeftBodyContainerWrapper,
    RightBodyContainerWrapper,
    SideBarContainer,
    Tag,
    PreviewContainer,
    DesktopWrapper,
    MobileWrapper,
    StickyBreadCrumbsWrapper,
    StyledBreadcrumbsLink,
    StyledBreadcrumbsTitle,
    StyledBreadcrumbsContainer,
    Scrollbar,
    ProgressContainer,
    ProgressBar,
} from '../pages/academy/blog/posts/_style'
import Banner from '../pages/academy/components/_banner'
import SideSubscriptionBanner from '../pages/academy/components/_side-subscription-banner'
import SocialSharing from '../pages/academy/components/_social-sharing'
import { handleTag } from 'pages/academy/components/_utility'
import { ArticleQuery } from 'types/graphql.types'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, Desktop, Mobile, Box, Flex, SectionContainer } from 'components/containers'
import { QueryImage } from 'components/elements'
import { convertDate, getMinRead, truncateString } from 'common/utility'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'
import { useTruncateLength } from 'pages/academy/blog/posts/preview'

type ArticlesTemplateProps = {
    data: ArticleQuery
}

const ArticlesTemplate = ({ data }: ArticlesTemplateProps) => {
    const [is_mobile] = useBrowserResize(992)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)
    const [is_mounted] = usePageLoaded()
    const truncateLength = useTruncateLength()

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

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.scrollY
        setPrevScrollPos(currentScrollPos)
        setVisible(currentScrollPos > 72)
    }, [])

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

    const post_data = data.directus.blog[0]
    const footer_banner_data = post_data?.footer_banners
    const side_banner_data = post_data?.side_banners
    const article_title = post_data?.blog_title
    const meta_title = post_data?.meta_title
    const meta_description = post_data?.meta_description
    const og_image =
        post_data?.og_image?.imageFile.childImageSharp.gatsbyImageData.images.fallback.src
    const og_title = post_data?.og_title
    const og_description = post_data?.og_description
    const test_data = post_data?.test_data

    const side_banner_data_details = {
        max_w_value: '328px',
        max_w_tablet: '320px',
        isExternal: footer_banner_data?.cta_url?.search(/deriv\.(com|me)/g) === -1 ? true : false,
        redirectLink: side_banner_data?.cta_url,
        imgSrcDesktop: side_banner_data?.banner_image?.imageFile.childImageSharp.gatsbyImageData,
        imgAltDesktop: side_banner_data?.banner_image?.description,
    }

    const footer_banner_details = {
        max_w_value: '792px',
        max_w_tablet: '580px',
        isExternal: footer_banner_data?.cta_url?.search(/deriv\.(com|me)/g) === -1 ? true : false,
        redirectLink: footer_banner_data?.cta_url,
        imgSrcDesktop:
            footer_banner_data?.desktop_banner_image?.imageFile.childImageSharp.gatsbyImageData,
        imgAltDesktop: footer_banner_data?.desktop_banner_image?.description,
        imgSrcMobile:
            footer_banner_data?.mobile_banner_image?.imageFile.childImageSharp.gatsbyImageData,
        imgAltMobile: footer_banner_data?.mobile_banner_image?.description,
    }

    const meta_attributes = {
        og_type: 'website',
        og_img_width: '600',
        og_img_height: '315',
        og_img: og_image,
        og_title: og_title ? og_title : meta_title,
        og_description: og_description ? og_description : meta_description,
    }

    return (
        <Layout type="academy" margin_top={'14.4'}>
            <SEO
                description={meta_description}
                title={meta_title}
                meta_attributes={meta_attributes}
                no_index={test_data}
            />
            <>
                {is_mounted && (
                    <SectionContainer padding="0" position="relative">
                        <Background>
                            <StickyBreadCrumbsWrapper scroll={visible}>
                                <BreadcrumbsWrapper scroll={visible}>
                                    <StyledBreadcrumbsContainer>
                                        <StyledBreadcrumbsLink to="/academy/blog/" color="grey-5">
                                            All articles
                                        </StyledBreadcrumbsLink>
                                        <img src={RightArrow} height="16" width="16" />
                                        <StyledBreadcrumbsTitle>
                                            {is_mobile
                                                ? truncateString(article_title, truncateLength)
                                                : article_title}
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
                                <HeroLeftWrapper width="100%">
                                    <InfoText mb="16px" size="14px">
                                        {post_data?.published_date &&
                                            convertDate(post_data?.published_date)}
                                    </InfoText>
                                    <ArticleTitle as="h1" type="page-title">
                                        {post_data?.blog_title}
                                    </ArticleTitle>
                                    <InfoText size="14px" mt="16px">
                                        {getMinRead(post_data?.blog_post)}
                                    </InfoText>
                                    <Mobile breakpoint="laptop">
                                        <SideBarContainer fd="column" mr="126px" height="auto">
                                            <Flex
                                                fw="wrap"
                                                jc="flex-start"
                                                max-width="100%"
                                                width=" 100%"
                                            >
                                                {post_data?.tags.map((tag) => {
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
                                        {post_data?.author && (
                                            <Flex ai="center" mt="40px" jc="flex-start">
                                                <>
                                                    {post_data?.author?.image && (
                                                        <WriterImage>
                                                            <QueryImage
                                                                data={
                                                                    post_data?.author?.image
                                                                        ?.imageFile.childImageSharp
                                                                        .gatsbyImageData
                                                                }
                                                                alt={
                                                                    post_data?.author?.image
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
                                                        {localize(post_data?.author?.name)}
                                                    </InfoText>
                                                </Box>
                                            </Flex>
                                        )}
                                    </Desktop>
                                </HeroLeftWrapper>
                                <HeroRightWrapper>
                                    <HeroImageContainer tabletL={{ mt: '24px' }}>
                                        <QueryImage
                                            data={
                                                post_data?.main_image?.imageFile.childImageSharp
                                                    .gatsbyImageData
                                            }
                                            alt={post_data?.main_image?.description || ''}
                                            className="standard-query-img"
                                        />
                                    </HeroImageContainer>
                                </HeroRightWrapper>
                            </HeroContainer>
                        </Background>

                        <BodyContainer>
                            <LeftBodyContainerWrapper>
                                <Mobile breakpoint="laptop">
                                    {post_data?.author && (
                                        <Flex ai="center" jc="flex-start">
                                            <>
                                                {post_data?.author?.image && (
                                                    <WriterImage>
                                                        <QueryImage
                                                            data={
                                                                post_data?.author?.image?.imageFile
                                                                    .childImageSharp.gatsbyImageData
                                                            }
                                                            alt={
                                                                post_data?.author?.image
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
                                                    {localize(post_data?.author?.name)}
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
                                            {post_data?.tags.map((tag) => {
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
                                            __html: post_data?.blog_post
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
                        </BodyContainer>
                    </SectionContainer>
                )}
            </>
        </Layout>
    )
}

export default WithIntl()(ArticlesTemplate)

// Query our published articles by slug
export const query = graphql`
    query Article($slug: String) {
        directus {
            blog(filter: { slug: { _eq: $slug } }) {
                id
                blog_title
                meta_title
                meta_description
                og_title
                og_description
                test_data
                published_date
                blog_post
                author {
                    id
                    name
                    image {
                        id
                        description
                        imageFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
                main_image {
                    id
                    description
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(
                                quality: 60
                                width: 800
                                webpOptions: { quality: 60 }
                                avifOptions: { quality: 60 }
                            )
                        }
                    }
                }
                og_image: main_image {
                    id
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(layout: FIXED, width: 600)
                        }
                    }
                }
                tags {
                    id
                    tags_id {
                        id
                        tag_name
                    }
                }
                footer_banners {
                    id
                    cta_url
                    name
                    desktop_banner_image {
                        id
                        description
                        imageFile {
                            childImageSharp {
                                gatsbyImageData(
                                    quality: 60
                                    webpOptions: { quality: 60 }
                                    avifOptions: { quality: 60 }
                                )
                            }
                        }
                    }
                    mobile_banner_image {
                        id
                        description
                        imageFile {
                            childImageSharp {
                                gatsbyImageData(
                                    quality: 60
                                    webpOptions: { quality: 60 }
                                    avifOptions: { quality: 60 }
                                )
                            }
                        }
                    }
                }
                side_banners {
                    id
                    cta_url
                    name
                    banner_image {
                        id
                        description
                        imageFile {
                            childImageSharp {
                                gatsbyImageData(
                                    quality: 60
                                    webpOptions: { quality: 60 }
                                    avifOptions: { quality: 60 }
                                )
                            }
                        }
                    }
                }
            }
        }
    }
`
