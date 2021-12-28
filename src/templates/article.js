import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
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
    SocialComponentsWrapper,
    LeftSocialComponents,
    RightSocialComponents,
    DesktopWrapper,
    MobileWrapper,
    DesktopBreadcrumbsWrapper,
    MobileBreadcrumbsWrapper,
    StyledImg,
    StyledBreadcrumbsLink,
    StyledBreadcrumbsTitle,
    Scrollbar,
    ProgressContainer,
    ProgressBar,
} from '../pages/academy/blog/posts/_style'
import Banner from '../pages/academy/components/_banner'
import ArticleEmailBanner from '../pages/academy/components/_side-subscription-banner.js'
import SocialSharing from '../pages/academy/components/_social-sharing'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, Show, Box, Flex, SectionContainer } from 'components/containers'
import { QueryImage } from 'components/elements'
import { convertDate, getMinRead } from 'common/utility'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'

const ArticlesTemplate = (props) => {
    const [isMounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
        isMounted && window.scrollTo(0, 0)
    }, [isMounted])

    const barElement = useRef(null)

    const scrollFunc = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (winScroll / height) * 130
        barElement.current.style.width = scrolled + '%'
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollFunc)
        return () => {
            window.removeEventListener('scroll', scrollFunc)
        }
    }, [])

    const post_data = props.data.directus.blog[0]
    const footer_banner_data = post_data?.footer_banners
    const side_banner_data = post_data?.side_banners
    const article_title = post_data?.blog_title
    const meta_title = post_data?.meta_title
    const meta_description = post_data?.meta_description
    const og_image = post_data?.og_image?.imageFile.childImageSharp.fixed.src
    const og_title = post_data?.og_title
    const og_description = post_data?.og_description
    const test_data = post_data?.test_data

    const side_banner_data_details = {
        max_w_value: '328px',
        max_w_tablet: '320px',
        isExternal: footer_banner_data?.cta_url?.search(/deriv\.(com|me)/g) === -1 ? true : false,
        redirectLink: side_banner_data?.cta_url,
        imgSrcDesktop: side_banner_data?.banner_image?.imageFile,
        imgAltDesktop: side_banner_data?.banner_image?.description,
    }

    const footer_banner_details = {
        max_w_value: '792px',
        max_w_tablet: '580px',
        isExternal: footer_banner_data?.cta_url?.search(/deriv\.(com|me)/g) === -1 ? true : false,
        redirectLink: footer_banner_data?.cta_url,
        imgSrcDesktop: footer_banner_data?.desktop_banner_image?.imageFile,
        imgAltDesktop: footer_banner_data?.desktop_banner_image?.description,
        imgSrcMobile: footer_banner_data?.mobile_banner_image?.imageFile,
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
        <Layout type="academy">
            <SEO
                description={meta_description}
                title={meta_title}
                meta_attributes={meta_attributes}
                no_index={test_data}
            />
            <>
                {isMounted && (
                    <SectionContainer padding="0" position="relative">
                        <Background>
                            <BreadcrumbsWrapper>
                                <Flex jc="flex-start" ai="center">
                                    <StyledBreadcrumbsLink to="/academy/" color="grey-5">
                                        Home
                                    </StyledBreadcrumbsLink>
                                    <StyledImg src={RightArrow} height="16" width="16" />
                                    <StyledBreadcrumbsLink to="/academy/blog/" color="grey-5">
                                        All articles
                                    </StyledBreadcrumbsLink>
                                    <StyledImg src={RightArrow} height="16" width="16" />
                                    <DesktopBreadcrumbsWrapper>
                                        <StyledBreadcrumbsTitle>
                                            {article_title}
                                        </StyledBreadcrumbsTitle>
                                    </DesktopBreadcrumbsWrapper>
                                </Flex>
                                <MobileBreadcrumbsWrapper>
                                    <Flex width="auto" jc="flex-start" mt="10px">
                                        <StyledBreadcrumbsTitle lh="20px">
                                            {article_title}
                                        </StyledBreadcrumbsTitle>
                                    </Flex>
                                </MobileBreadcrumbsWrapper>
                            </BreadcrumbsWrapper>
                            <Scrollbar>
                                <ProgressContainer>
                                    <ProgressBar ref={barElement}></ProgressBar>
                                </ProgressContainer>
                            </Scrollbar>
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
                                    <Show.Mobile min_width="laptop">
                                        <SideBarContainer fd="column" mr="126px" height="auto">
                                            <Flex
                                                fw="wrap"
                                                jc="flex-start"
                                                max-width="100%"
                                                width=" 100%"
                                            >
                                                {post_data?.tags.map((tag) => {
                                                    return (
                                                        <Tag key={tag?.tags_id?.id}>
                                                            {tag?.tags_id?.tag_name}
                                                        </Tag>
                                                    )
                                                })}
                                            </Flex>
                                        </SideBarContainer>
                                    </Show.Mobile>

                                    <Show.Desktop max_width="laptop">
                                        {post_data?.author && (
                                            <Flex ai="center" mt="40px" jc="flex-start">
                                                <>
                                                    {post_data?.author?.image && (
                                                        <WriterImage>
                                                            <QueryImage
                                                                data={
                                                                    post_data?.author?.image
                                                                        ?.imageFile
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
                                    </Show.Desktop>
                                </HeroLeftWrapper>
                                <HeroRightWrapper>
                                    <HeroImageContainer tabletL={{ mt: '24px' }}>
                                        <QueryImage
                                            data={post_data?.main_image?.imageFile}
                                            alt={post_data?.main_image?.description || ''}
                                            className="standard-query-img"
                                        />
                                    </HeroImageContainer>
                                </HeroRightWrapper>
                            </HeroContainer>
                        </Background>

                        <BodyContainer>
                            <LeftBodyContainerWrapper>
                                <Show.Mobile min_width="laptop">
                                    {post_data?.author && (
                                        <Flex ai="center" jc="flex-start">
                                            <>
                                                {post_data?.author?.image && (
                                                    <WriterImage>
                                                        <QueryImage
                                                            data={
                                                                post_data?.author?.image?.imageFile
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
                                </Show.Mobile>
                                <Show.Desktop max_width="laptop">
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
                                                    <Tag key={tag?.tags_id?.id}>
                                                        {tag?.tags_id?.tag_name}
                                                    </Tag>
                                                )
                                            })}
                                        </Flex>
                                        {side_banner_data_details && (
                                            <Banner detailsObj={side_banner_data_details} />
                                        )}
                                        <DesktopWrapper>
                                            <ArticleEmailBanner />
                                        </DesktopWrapper>
                                    </SideBarContainer>
                                </Show.Desktop>
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
                                    <SocialComponentsWrapper>
                                        <LeftSocialComponents />
                                        <RightSocialComponents>
                                            <SocialSharing />
                                        </RightSocialComponents>
                                    </SocialComponentsWrapper>

                                    {side_banner_data_details && (
                                        <MobileWrapper>
                                            <Flex mt="24px">
                                                <Banner detailsObj={side_banner_data_details} />
                                            </Flex>
                                        </MobileWrapper>
                                    )}
                                    <MobileWrapper>
                                        <ArticleEmailBanner />
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

ArticlesTemplate.propTypes = {
    data: PropTypes.object,
    pageContext: PropTypes.object,
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
                                quality: 100
                                webpOptions: { quality: 100 }
                                avifOptions: { quality: 100, lossless: true }
                                placeholder: BLURRED
                            )
                        }
                    }
                }
                og_image: main_image {
                    id
                    imageFile {
                        childImageSharp {
                            gatsbyImageData
                            fixed(width: 600) {
                                src
                            }
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
                                    quality: 100
                                    webpOptions: { quality: 100 }
                                    avifOptions: { quality: 100, lossless: true }
                                    placeholder: BLURRED
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
                                    quality: 100
                                    webpOptions: { quality: 100 }
                                    avifOptions: { quality: 100, lossless: true }
                                    placeholder: BLURRED
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
                                    quality: 100
                                    webpOptions: { quality: 100 }
                                    avifOptions: { quality: 100, lossless: true }
                                    placeholder: BLURRED
                                )
                            }
                        }
                    }
                }
            }
        }
    }
`
