import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
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
} from '../_style'
import Banner from '../../../../blog/components/_banner'
import SocialSharing from '../../../../blog/_social-sharing'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, Show, Box, Flex, SectionContainer } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { convertDate, isBrowser } from 'common/utility'

const query_preview = graphql`
    query Preview {
        directus {
            blog {
                id
                slug
                blog_title
                published_date
                read_time_in_minutes
                blog_post
                author {
                    id
                    name
                    image {
                        id
                        imageFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
                main_image {
                    id
                    imageFile {
                        childImageSharp {
                            gatsbyImageData
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
                        imageFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                    mobile_banner_image {
                        id
                        imageFile {
                            childImageSharp {
                                gatsbyImageData
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
                        imageFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    }
`

const BlogPreview = (props) => {
    const data = useStaticQuery(query_preview)
    const pathname = props.pageContext.pathname
    const [post_data, setPostData] = useState()
    const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        if (isMounted && isBrowser()) {
            const query_string = window.location.search
            const url_params = new URLSearchParams(query_string)
            const params = url_params.get('id')
            const item_data = data.directus.blog.find((items) => {
                return items.id == params
            })
            setPostData(item_data)
        }
    }, [isMounted])

    const footer_banner_data = post_data?.footer_banners
    const side_banner_data = post_data?.side_banners

    const side_banner_data_details = {
        max_w_value: '328px',
        max_w_tablet: '320px',
        isExternal: true,
        redirectLink: side_banner_data?.cta_url,
        imgSrcDesktop: side_banner_data?.banner_image?.imageFile,
    }

    const footer_banner_details = {
        max_w_value: '792px',
        max_w_tablet: '580px',
        isExternal: true,
        redirectLink: footer_banner_data?.cta_url,
        imgSrcDesktop: footer_banner_data?.desktop_banner_image?.imageFile,
        imgSrcMobile: footer_banner_data?.mobile_banner_image?.imageFile,
    }

    return (
        <Layout>
            <SEO
                description={
                    'Checkout latest trading news, market updates, useful tips, and how-to guides for Deriv products and online trading platforms on our official blog.'
                }
                title={'Blog Post Preview | Deriv Academy'}
                no_index
            />

            <SectionContainer padding="0" position="relative">
                <Background>
                    <HeroContainer>
                        <HeroLeftWrapper width="100%">
                            <InfoText mb="16px" size="14px">
                                {post_data?.published_date &&
                                    localize(convertDate(post_data?.published_date))}
                            </InfoText>
                            <Header as="h1" type="page-title">
                                {post_data?.blog_title}
                            </Header>
                            <InfoText size="14px" mt="16px">
                                {post_data?.read_time_in_minutes &&
                                    localize(post_data?.read_time_in_minutes + ' min read')}
                            </InfoText>
                            <Show.Mobile min_width="laptop">
                                <SideBarContainer fd="column" mr="126px" height="auto">
                                    <Flex fw="wrap" jc="flex-start" max-width="100%" width=" 100%">
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
                                                    <QueryImage
                                                        data={post_data?.author?.image?.imageFile}
                                                        alt=""
                                                    />
                                                </WriterImage>
                                            )}
                                        </>

                                        <Box>
                                            <WrittenbyText color="grey-5" size="12px">
                                                {localize('Written by')}
                                            </WrittenbyText>
                                            <InfoText>{localize(post_data?.author?.name)}</InfoText>
                                        </Box>
                                    </Flex>
                                )}
                            </Show.Desktop>
                        </HeroLeftWrapper>
                        <HeroRightWrapper>
                            <HeroImageContainer tabletL={{ mt: '24px' }}>
                                <QueryImage data={post_data?.main_image?.imageFile} alt="" />
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
                                                    data={post_data?.author?.image?.imageFile}
                                                    alt=""
                                                />
                                            </WriterImage>
                                        )}
                                    </>

                                    <Box>
                                        <WrittenbyText color="grey-5" size="12px">
                                            {localize('Written by')}
                                        </WrittenbyText>
                                        <InfoText>{localize(post_data?.author?.name)}</InfoText>
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
                                    <Banner detailsObj={side_banner_data_details} />
                                )}
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

                            {footer_banner_details && <Banner detailsObj={footer_banner_details} />}
                            <SocialComponentsWrapper>
                                <LeftSocialComponents />
                                <RightSocialComponents>
                                    <SocialSharing pathname={pathname} />
                                </RightSocialComponents>
                            </SocialComponentsWrapper>

                            {side_banner_data_details && (
                                <Show.Mobile>
                                    <Flex mt="24px">
                                        <Banner detailsObj={side_banner_data_details} />
                                    </Flex>
                                </Show.Mobile>
                            )}
                        </Flex>
                    </RightBodyContainerWrapper>
                </BodyContainer>
            </SectionContainer>
        </Layout>
    )
}

BlogPreview.propTypes = {
    pageContext: PropTypes.object,
}

export default WithIntl()(BlogPreview)
