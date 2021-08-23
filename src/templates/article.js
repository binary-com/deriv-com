import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import Banner from '../pages/blog/components/_banner'
import SocialSharing from '../pages/blog/_social-sharing'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, Show, Box, Flex, Container, SectionContainer } from 'components/containers'
import { Header, QueryImage, Text } from 'components/elements'
import device from 'themes/device'

const Background = styled.div`
    background: var(--color-grey-8);
    width: 100%;
    height: 100%;

    @media ${device.laptop} {
        background-image: linear-gradient(var(--color-grey-8) 84%, var(--color-white) 20%);
    }
`
const HeroContainer = styled(Container)`
    height: 566px;
    padding: 76px 0 0;
    align-items: flex-start;
    margin-bottom: 86px;

    @media (max-width: 1300px) {
        padding: 76px 16px 0;
    }

    @media ${device.laptopM} {
        padding-top: 65px;
        height: 500px;
        margin-bottom: 48px;
    }
    @media ${device.laptop} {
        width: 100%;
        max-width: 58.8rem;
        height: auto;
        margin-bottom: 0;
        padding: 36px 16px 0;
        flex-direction: column;
    }
`
const HeroLeftWrapper = styled(Box)`
    max-width: 384px;
    margin-right: 24px;

    @media (max-width: 1300px) {
        max-width: 360px;
        margin-right: 16px;
    }

    @media ${device.laptop} {
        max-width: 100%;
        margin-right: 0;
    }
`
const HeroRightWrapper = styled.div`
    position: relative;
    max-width: 792px;
    max-height: 532px;
    width: 100%;

    @media (max-width: 1300px) {
        max-width: 100%;
        max-height: 460px;
        overflow: hidden;
    }
`
const HeroImageContainer = styled(Box)`
    position: absolute;
    top: 10%;
    right: 0%;
    max-height: 532px;
    overflow: hidden;

    @media (max-width: 1300px) {
        position: relative;
        top: unset;
        right: unset;
        max-height: 460px;
    }

    @media ${device.laptop} {
        margin: auto;
    }

    > img {
        max-width: 100%;
        height: auto;
    }
`
const InfoText = styled(Text)`
    @media ${device.laptop} {
        font-size: 12px;
    }
`
const WriterImage = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50px;
    margin-right: 8px;
    @media ${device.laptop} {
        width: 40px;
        height: 40px;

        > img {
            max-width: 100%;
            height: auto;
        }
    }
`
const WrittenbyText = styled(Text)`
    @media ${device.laptop} {
        font-size: 10px;
    }
`
const BodyContainer = styled(Container)`
    align-items: flex-start;
    padding: 0 0 40px;

    @media ${device.laptop} {
        flex-direction: column;
        margin-top: 24px;
        max-width: 58.8rem;
    }
`
const LeftBodyContainerWrapper = styled(Flex)`
    max-width: 384px;
    margin-right: 24px;
    justify-content: flex-start;
`
const RightBodyContainerWrapper = styled(Flex)`
    position: relative;
    max-width: 792px;
    width: 100%;

    @media ${device.laptop} {
        margin-top: 40px;
    }
`
const SideBarContainer = styled(Flex)`
    max-width: 282px;

    @media ${device.laptop} {
        margin: 24px 0 32px;
    }
`
const Tag = styled(Flex)`
    height: 22px;
    width: auto;
    color: var(--color-blue-9);
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    background-color: var(--color-blue-10);
    padding: 1px 8px 0;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    margin-bottom: 16px;
    @media ${device.laptop} {
        height: 20px;
        margin-right: 8px;
        font-size: 12px;
    }
`
const PreviewContainer = styled(Box)`
    font-size: 16px;
    max-width: 792px;
    width: 100%;
    padding-bottom: 16px;

    & br {
        display: none;
    }
    & p {
        margin-top: 22px;
        font-weight: 400;
        line-height: 24px;
        font-size: 16px;

        :first-child {
            margin-top: 0;
        }
    }
    & hr {
        margin: 32px 0;
    }
    & ul {
        margin-top: 32px;
        list-style-type: disc;
        margin-block-start: 10px;
        margin-block-end: 10px;

        > li {
            margin: 8px 0 0 18px;
            padding: 0;
            line-height: 24px;
            font-size: 16px;
        }
    }
    li > strong {
        display: inline-block;
        margin: 16px 0 0 8px;
        padding: 0;
        line-height: 24px;
        font-size: 16px;
        font-weight: bold;
    }
    & a {
        font-size: 16px;
        color: var(--color-red);
        text-decoration: none;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
    & img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: auto;
        margin-top: 16px;
    }
    & img[width='full'] {
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
        max-width: 100vw;
    }
    & h1 {
        font-size: 64px;
        line-height: 80px;
        margin-top: 32px;
        font-weight: bold;
    }
    & h2 {
        font-size: 48px;
        line-height: 60px;
        margin-top: 32px;
        font-weight: bold;
    }
    & h3 {
        font-size: 32px;
        line-height: 40px;
        margin-top: 40px;
        font-weight: bold;

        & + p {
            margin-top: 8px;
        }
    }
    & h4 {
        font-size: 24px;
        line-height: 36px;
        margin-top: 40px;
        font-weight: bold;

        & + p {
            margin-top: 8px;
        }
    }
    & h5 {
        font-size: 20px;
        line-height: 30px;
        margin-top: 24px;
        font-weight: bold;
    }
    & h6 {
        font-size: 16px;
        line-height: 24px;
        margin-top: 40px;
        font-weight: bold;
    }
    @media ${device.laptop} {
        max-width: none;

        & p {
            font-size: 14px;
        }
        & ul {
            > li {
                font-size: 14px;
                line-height: 20px;
            }
        }
        & h1 {
            font-size: 32px;
            line-height: 40px;
        }
        & h2 {
            font-size: 28px;
            line-height: 34px;
        }
        & h3 {
            font-size: 24px;
            line-height: 30px;

            & + p {
                margin-top: 8px;
            }
        }
        & h4 {
            font-size: 18px;
            line-height: 26px;

            & + p {
                margin-top: 8px;
            }
        }
        & h5 {
            font-size: 16px;
            line-height: 24px;
        }
        & h6 {
            font-size: 14px;
            line-height: 20px;
        }
    }
`
const SocialComponentsWrapper = styled(Flex)`
    justify-content: space-between;
    border-top: 1px solid var(--color-grey-6);
    padding-top: 24px;
    margin: 40px 0;
`
const LeftSocialComponents = styled.div`
    width: 10px;
`
const RightSocialComponents = styled.div`
    width: auto;
`

const convertDate = (date) => {
    const newdate = new Date(date)
    return (
        newdate.toLocaleString('en', { day: 'numeric' }) +
        ' ' +
        newdate.toLocaleString('en', { month: 'long' }) +
        ' ' +
        newdate.toLocaleString('en', { year: 'numeric' })
    )
}

export const query = graphql`
    query MyQuery($slug: String) {
        directus {
            blog(filter: { slug: { _eq: $slug } }) {
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

const ArticlesTemplate = (props) => {
    const data = useStaticQuery(query)
    const [isData, setData] = useState()

    useEffect(() => {
        const params = location.pathname.split('/').slice(3)
        const item_data = data.directus.blog.find((items) => {
            return items.slug == params[0]
        })
        setData(item_data)
    }, [data])

    const pathname = props.pageContext.pathname
    const post_data = isData
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
                    'Learn about the markets that you can trade online with Deriv, including forex, commodities, synthetic indices, and stock indices.'
                }
                title={'Markets | Markets to trade | Deriv'}
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
                                        <WriterImage>
                                            <QueryImage
                                                data={post_data?.author?.image?.imageFile}
                                                alt=""
                                            />
                                        </WriterImage>
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
                                    <WriterImage>
                                        <QueryImage
                                            data={post_data?.author?.image?.imageFile}
                                            alt=""
                                        />
                                    </WriterImage>
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
                                <Banner detailsObj={side_banner_data_details} />
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

                            <Banner detailsObj={footer_banner_details} />
                            <SocialComponentsWrapper>
                                <LeftSocialComponents />
                                <RightSocialComponents>
                                    <SocialSharing pathname={pathname} />
                                </RightSocialComponents>
                            </SocialComponentsWrapper>

                            <Show.Mobile>
                                <Flex mt="24px">
                                    <Banner detailsObj={side_banner_data_details} />
                                </Flex>
                            </Show.Mobile>
                        </Flex>
                    </RightBodyContainerWrapper>
                </BodyContainer>
            </SectionContainer>
        </Layout>
    )
}

ArticlesTemplate.propTypes = {
    data: PropTypes.object,
    pageContext: PropTypes.object,
}

export default WithIntl()(ArticlesTemplate)
