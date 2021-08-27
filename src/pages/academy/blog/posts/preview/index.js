import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
    Background,
    HeroContainer,
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
} from '../_style'
import Banner from '../../../../blog/components/_banner'
import ArticleEmailBanner from '../../components/side-subscription-banner'
import SocialSharing from '../../../../blog/_social-sharing'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, Show, Box, Flex, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import { convertDate, isBrowser } from 'common/utility'
import { cms_assets_end_point } from 'common/constants'

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
            const res = await fetch(`${end_point_url}${id}?fields=*.*.*.*.*`, { cache: 'no-store' })
            const data = await res.json()
            return data
        }

        const getPreviews = async () => {
            const dataFromServer = await fetchBlogPreview()
            setData(dataFromServer)
        }

        getPreviewId()
        if (id) {
            getPreviews()
        }

        window.scrollTo(0, 0)
    }, [id])

    const post_data = data?.data

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
        <Layout>
            <SEO description={post_data?.meta_description} title={post_data?.meta_title} no_index />
            <>
                {post_data && (
                    <SectionContainer padding="0" position="relative">
                        <Background>
                            <HeroContainer>
                                <HeroLeftWrapper width="100%">
                                    <InfoText mb="16px" size="14px">
                                        {post_data?.published_date &&
                                            convertDate(post_data?.published_date)}
                                    </InfoText>
                                    <Header as="h1" type="page-title">
                                        {post_data?.blog_title}
                                    </Header>
                                    <InfoText size="14px" mt="16px">
                                        {post_data?.read_time_in_minutes &&
                                            post_data?.read_time_in_minutes +
                                                ' ' +
                                                localize('min read')}
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
