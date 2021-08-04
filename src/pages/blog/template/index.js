import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BottomCta from './_blog-footer/_blog-footer'
import SideCta from './_side-cta/_side-cta'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, Show, Box, Flex, Container, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

const Background = styled.div`
    background: var(--color-grey-8);
    width: 100%;
`
const HeroContainer = styled(Container)`
    height: 634px;
    padding-top: 148px;
    align-items: flex-start;
    margin-bottom: 86px;

    @media ${device.laptopL} {
        width: 90%;
    }
    @media ${device.laptopM} {
        padding-top: 65px;
        height: 500px;
        margin-bottom: 30px;
    }
    @media ${device.laptop} {
        height: 450px;
        margin-bottom: 20px;
    }

    @media ${device.tabletL} {
        background-image: linear-gradient(var(--color-grey-8) 80%, var(--color-white) 20%);
        height: auto;
        padding: 36px 16px 0;
        width: 100%;
        flex-direction: column;
    }
`
const HeroImageContainer = styled(Box)`
    @media ${device.tabletL} {
        margin: auto;
    }

    > img {
        max-width: 100%;
        height: auto;
    }
`
const InfoText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 12px;
    }
`
const WriterImage = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50px;
    margin-right: 8px;

    @media ${device.tabletL} {
        width: 40px;
        height: 40px;

        > img {
            max-width: 100%;
            height: auto;
        }
    }
`
const WrittenbyText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 10px;
    }
`
const BodyContainer = styled(Container)`
    align-items: flex-start;

    @media ${device.tabletL} {
        flex-direction: column;
        padding: 0 16px;
        margin-top: 24px;
        width: 100%;
    }
`
const SideBarContainer = styled(Flex)`
    max-width: 282px;
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

    @media ${device.tabletL} {
        height: 20px;
        margin-right: 8px;
        font-size: 12px;
    }
`
const PreviewContainer = styled(Box)`
    font-size: 16px;
    max-width: 792px;
    width: 100%;

    & p {
        margin-top: 22px;
        font-weight: 400;
        line-height: 24px;
        font-size: 16px;

        & a {
            font-size: 16px;
            color: var(--color-red);
            text-decoration: none;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }
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
    @media ${device.tabletL} {
        max-width: none;

        & p {
            font-size: 14px;

            & a {
                font-size: 14px;
            }
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

const PreviewPage = () => {
    const [id, setId] = useState(null)
    const [data, setData] = useState(null)
    const [date, setDate] = useState(null)
    const end_point_url = 'https://amammustofa.com/items/articles/'

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    useEffect(() => {
        const getPreviewId = () => {
            // if (typeof window !== 'undefined') {
            // const query_string = window.location.search
            // const url_params = new URLSearchParams(query_string)
            const preview_id = '5183bb93-8218-4168-a03a-0274505d7b41' //url_params.get('article_id')
            if (preview_id) {
                setId(preview_id)
            }
            //}
        }
        const fetchArticle = async () => {
            const res = await fetch(`${end_point_url}${id}`, { cache: 'no-store' })
            const data = await res.json()
            setDate(createDate(data.data.publish_date))
            return data
        }

        const createDate = (publishDate) => {
            const tempDate = new Date(publishDate).toString().split(' ')
            const fullDate =
                tempDate[2] + ' ' + monthNames[new Date(publishDate).getMonth()] + ' ' + tempDate[3]

            return fullDate
        }

        getPreviewId()

        const getPreviews = async () => {
            const dataFromServer = await fetchArticle(id)
            setData(dataFromServer)
        }
        if (id) {
            getPreviews()
        }
    }, [id])

    return (
        <Layout>
            <SEO
                description={localize(
                    'Learn about the markets that you can trade online with Deriv, including forex, commodities, synthetic indices, and stock indices.',
                )}
                title={localize('Markets | Markets to trade | Deriv')}
            />

            <SectionContainer padding="0" position="relative">
                <Background>
                    <HeroContainer>
                        <Box
                            max_width="384px"
                            width="100%"
                            mr="24px"
                            tabletL={{ max_width: '100%', mr: '0' }}
                        >
                            <InfoText mb="16px" size="14px">
                                {localize(date ? date : '')}
                            </InfoText>
                            <Header as="h1" type="page-title">
                                {data?.data.article_title}
                            </Header>
                            <InfoText size="14px" mt="16px">
                                {data?.minutes_to_read &&
                                    localize(data.minutes_to_read + ' min read')}
                            </InfoText>
                            <Show.Mobile>
                                <SideBarContainer fd="column" mr="126px" height="auto">
                                    <Flex
                                        fw="wrap"
                                        jc="flex-start"
                                        max-width="328px"
                                        width=" 100%"
                                        tabletL={{ mt: '24px', mb: '40px' }}
                                    >
                                        {data?.data.article_tags.map((tag) => {
                                            return <Tag key={tag}>{tag}</Tag>
                                        })}
                                    </Flex>
                                </SideBarContainer>
                            </Show.Mobile>

                            <Show.Desktop>
                                {data?.data.author && (
                                    <Flex ai="center" mt="40px" jc="flex-start">
                                        <WriterImage>
                                            <img
                                                src={
                                                    'https://amammustofa.com/assets/' +
                                                    data?.data.authors_image +
                                                    '.png'
                                                }
                                            />
                                        </WriterImage>
                                        <Box>
                                            <WrittenbyText color="grey-5" size="12px">
                                                {localize('Written by')}
                                            </WrittenbyText>
                                            <InfoText>{localize(data?.data.author)}</InfoText>
                                        </Box>
                                    </Flex>
                                )}
                            </Show.Desktop>
                        </Box>

                        <HeroImageContainer tabletL={{ mt: '24px' }}>
                            <img
                                src={
                                    'https://amammustofa.com/assets/' +
                                    data?.data.main_image +
                                    '.png'
                                }
                            />
                        </HeroImageContainer>
                    </HeroContainer>
                </Background>

                <BodyContainer>
                    <Show.Mobile>
                        {data?.data.author && (
                            <Flex ai="center" jc="flex-start" tabletL={{ mt: '24px', mb: '40px' }}>
                                <WriterImage>
                                    <img
                                        src={
                                            'https://amammustofa.com/assets/' +
                                            data?.data.authors_image +
                                            '.png'
                                        }
                                    />
                                </WriterImage>
                                <Box>
                                    <WrittenbyText color="grey-5" size="12px">
                                        {localize('Written by')}
                                    </WrittenbyText>
                                    <InfoText>{localize(data?.data.author)}</InfoText>
                                </Box>
                            </Flex>
                        )}
                    </Show.Mobile>
                    <Show.Desktop>
                        <SideBarContainer fd="column" mr="126px" height="auto">
                            <Flex
                                jc="flex-start"
                                fw="wrap"
                                max-width="255px"
                                width=" 100%"
                                mr="138px"
                            >
                                {data?.data.article_tags.map((tag) => {
                                    return <Tag key={tag}>{tag}</Tag>
                                })}
                            </Flex>
                            <SideCta />
                        </SideBarContainer>
                    </Show.Desktop>
                    <Flex fd="column" margin="0 auto" ai="center">
                        <PreviewContainer
                            dangerouslySetInnerHTML={{
                                __html: data?.data.article_body
                                    .replace(/<p><img /g, '<img ')
                                    .replace(/\/><\/p>/g, '/>'),
                            }}
                        />
                        <BottomCta />
                        <Show.Mobile>
                            <SideCta />
                        </Show.Mobile>
                    </Flex>
                </BodyContainer>
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(PreviewPage)
