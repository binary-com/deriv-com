import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
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
} from '../_style'
import Banner from '../../../components/_banner'
import SocialSharing from '../../../components/_social-sharing'
import ArticleEmailBanner from '../../../components/_side-subscription-banner'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, Show, Box, Flex, SectionContainer } from 'components/containers'
import { convertDate, isBrowser, getMinRead } from 'common/utility'
import { cms_assets_end_point } from 'common/constants'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'

const BlogPreview = () => {
    const [data, setData] = useState(null)
    const [id, setId] = useState(null)
    const end_point_url = 'https://cms.deriv.cloud/items/blog/'

    useEffect(() => {
        const getPreviewId = () => {
            if (isBrowser()) {
                const query_string = window.location.search
                const url_params = new URLSearchParams(query_string)
                const params = url_params.get('id')
                if (params) {
                    setId(params)
                }
            }
        }

        const fetchBlogPreview = async () => {
            const url = `${end_point_url}${id}?access_token=${process.env.GATSBY_DIRECTUS_AUTH_TOKEN}&fields=*.*.*.*.*`
            const res = await fetch(url, { cache: 'no-store' })
            return await res.json()
        }

        const getPreviews = async () => {
            const dataFromServer = await fetchBlogPreview()
            setData(dataFromServer)
            if (dataFromServer) {
                window.scrollTo(0, 0)
            }
        }

        getPreviewId()
        if (id) {
            getPreviews()
        }
    }, [id])

    const post_data = data?.data
    const article_title = post_data?.blog_title
    const footer_banner_data = post_data?.footer_banners
    const side_banner_data = post_data?.side_banners

    const side_banner_data_details = {
        max_w_value: '328px',
        max_w_tablet: '320px',
        isExternal: true,
        redirectLink: side_banner_data?.cta_url,
        imgSrcDesktop: side_banner_data?.banner_image?.id,
    }

    const footer_banner_details = {
        max_w_value: '792px',
        max_w_tablet: '580px',
        isExternal: true,
        redirectLink: footer_banner_data?.cta_url,
        imgSrcDesktop: footer_banner_data?.desktop_banner_image?.id,
        imgSrcMobile: footer_banner_data?.mobile_banner_image?.id,
    }

    return (
        <Layout type="academy">
            <SEO description={post_data?.meta_description} title={post_data?.meta_title} no_index />
            <>
                {post_data && (
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
                                                        <>
                                                            {tag?.tags_id?.id && (
                                                                <Tag key={tag?.tags_id?.id}>
                                                                    {tag?.tags_id?.tag_name}
                                                                </Tag>
                                                            )}
                                                        </>
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
                                                            <img
                                                                src={`${cms_assets_end_point}${post_data?.author?.image.id}`}
                                                                alt=""
                                                                width="48"
                                                                height="48"
                                                            />
                                                        </WriterImage>
                                                    )}
                                                </>

                                                <Box>
                                                    <WrittenbyText color="grey-5" size="12px">
                                                        {localize('Written by')}
                                                    </WrittenbyText>
                                                    <InfoText>{post_data?.author?.name}</InfoText>
                                                </Box>
                                            </Flex>
                                        )}
                                    </Show.Desktop>
                                </HeroLeftWrapper>
                                <HeroRightWrapper>
                                    <HeroImageContainer tabletL={{ mt: '24px' }}>
                                        <img
                                            src={`${cms_assets_end_point}${post_data?.main_image?.id}`}
                                            alt=""
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
                                                        <img
                                                            src={`${cms_assets_end_point}${post_data?.author?.image.id}`}
                                                            alt=""
                                                        />
                                                    </WriterImage>
                                                )}
                                            </>

                                            <Box>
                                                <WrittenbyText color="grey-5" size="12px">
                                                    {localize('Written by')}
                                                </WrittenbyText>
                                                <InfoText>{post_data?.author?.name}</InfoText>
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
                                                    <>
                                                        {tag?.tags_id?.id && (
                                                            <Tag key={tag?.tags_id?.id}>
                                                                {tag?.tags_id?.tag_name}
                                                            </Tag>
                                                        )}
                                                    </>
                                                )
                                            })}
                                        </Flex>
                                        {side_banner_data_details && (
                                            <Banner detailsPreviewObj={side_banner_data_details} />
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
                                        <Banner detailsPreviewObj={footer_banner_details} />
                                    )}
                                    <SocialComponentsWrapper>
                                        <LeftSocialComponents />
                                        <RightSocialComponents>
                                            <SocialSharing />
                                        </RightSocialComponents>
                                    </SocialComponentsWrapper>

                                    {side_banner_data_details && (
                                        <Show.Mobile>
                                            <Flex mt="24px">
                                                <Banner
                                                    detailsPreviewObj={side_banner_data_details}
                                                />
                                            </Flex>
                                        </Show.Mobile>
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

BlogPreview.propTypes = {
    pageContext: PropTypes.object,
}

export default WithIntl()(BlogPreview)
