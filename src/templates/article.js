import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
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
} from '../pages/academy/blog/posts/_style'
import Banner from '../pages/blog/components/_banner'
import SocialSharing from '../pages/blog/_social-sharing'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, Show, Box, Flex, SectionContainer } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { convertDate } from 'common/utility'

const ArticlesTemplate = (props) => {
    const url = props.location.href
    const post_data = props.data.directus.blog[0]
    const footer_banner_data = post_data?.footer_banners
    const side_banner_data = post_data?.side_banners
    const meta_title = post_data?.meta_title
    const meta_description = post_data?.meta_description
    const og_image = post_data?.og_image?.imageFile.childImageSharp.fixed.src

    const side_banner_data_details = {
        max_w_value: '328px',
        max_w_tablet: '320px',
        isExternal: true,
        redirectLink: side_banner_data?.cta_url,
        imgSrcDesktop: side_banner_data?.banner_image?.imageFile,
        imgAltDesktop: side_banner_data?.banner_image?.description,
    }

    const footer_banner_details = {
        max_w_value: '792px',
        max_w_tablet: '580px',
        isExternal: true,
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
    }

    return (
        <Layout>
            <SEO
                description={meta_description}
                title={meta_title}
                meta_attributes={meta_attributes}
            />
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
                                    localize(post_data?.read_time_in_minutes + ' min read')}
                            </InfoText>
                            <Show.Mobile min_width="laptop">
                                <SideBarContainer fd="column" mr="126px" height="auto">
                                    <Flex fw="wrap" jc="flex-start" max-width="100%" width=" 100%">
                                        {post_data?.tags.map((tag) => {
                                            return (
                                                <Tag key={tag.tags_id.id}>
                                                    {tag.tags_id.tag_name}
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
                                                        data={post_data?.author?.image?.imageFile}
                                                        alt={post_data?.author?.image?.description}
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
                                <QueryImage
                                    data={post_data?.main_image?.imageFile}
                                    alt={post_data?.main_image?.description}
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
                                                    data={post_data?.author?.image?.imageFile}
                                                    alt={post_data?.author?.image?.description}
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
                                            <Tag key={tag.tags_id.id}>{tag.tags_id.tag_name}</Tag>
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
                                    <SocialSharing url={url} />
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

ArticlesTemplate.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
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
                published_date
                read_time_in_minutes
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
                            gatsbyImageData
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
                                gatsbyImageData
                            }
                        }
                    }
                    mobile_banner_image {
                        id
                        description
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
                        description
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
