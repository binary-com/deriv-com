import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SectionContainer, SEO, Show, Box, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

const HeroContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 144.4rem;
    padding: 7.8rem 12.4rem 14.6rem 12rem;
    height: 56.2rem;
    background-color: var(--color-grey-8);
    margin: auto;
    margin-bottom: 8.6rem;

    @media (max-width: 1350px) {
        height: 50rem;
    }
    @media ${device.tabletL} {
        flex-direction: column;
        margin-bottom: 0;
        padding: 38px 16px 0;
        height: auto;
        background-image: linear-gradient(#f2f3f4 80%, #ffffff 20%);
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
const WriterContainer = styled(Box)`
    display: flex;
    align-items: center;
`
const PublishDate = styled(Text)`
    @media ${device.tabletL} {
        font-size: 12px;
    }
`
const MinsToRead = styled(Text)`
    @media ${device.tabletL} {
        font-size: 12px;
    }
`
const WriterImage = styled.div`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 5rem;
    margin-right: 8px;

    @media ${device.tabletL} {
        width: 4rem;
        height: 4rem;

        > img {
            max-width: 100%;
            height: auto;
        }
    }
`
const AuthorText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 12px;
    }
`
const WrittenbyText = styled(Text)`
    color: var(--color-grey-5);
    font-size: var(--text-size-xxs);

    @media ${device.tabletL} {
        font-size: 10px;
    }
`
const BodyContainer = styled(Box)`
    display: flex;

    @media ${device.tabletL} {
        flex-direction: column;
    }
`
const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 28.2rem;
    margin-right: 12.6rem;
    width: 100%;
`
const ArticleTagContainer = styled(Box)`
    display: flex;
    flex-wrap: wrap;
`
const Tag = styled.div`
    height: 2.2rem;
    color: var(--color-blue-10);
    font-weight: bold;
    font-size: var(--text-size-xs);
    border-radius: 0.8rem;
    background-color: var(--color-blue-9);
    padding: 1px 8px;
    display: flex;
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
const FooterContainer = styled.div`
    align-items: center;

    > img {
        max-width: 100%;
        height: auto;
    }
`
const PreviewContainer = styled(Box)`
    font-size: var(--text-size-s);
    max-width: 79.2rem;
    width: 100%;

    & p {
        margin-top: 2.2rem;
        font-weight: 400;
        line-height: 24px;
        font-size: 1.6rem;

        :first-child {
            margin-top: 0;
        }
        @media ${device.tabletL} {
            font-size: 14px;
        }
    }
    & hr {
        margin: 32px 0;
    }
    & ul {
        margin-top: 3.2rem;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;

        > li {
            margin: 8px 0 0 18px;
            padding: 0;
            line-height: 24px;
            font-size: var(--text-size-s);
        }
    }
    li > strong {
        display: inline-block;
        margin: 16px 0 0 8px;
        padding: 0;
        line-height: 24px;
        font-size: var(--text-size-s);
        font-weight: bold;
    }
    & a {
        font-size: var(--text-size-sm);
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
        font-size: var(--text-size-xxl);
        line-height: 80px;
        margin-top: 32px;
        font-weight: bold;
    }
    & h2 {
        font-size: var(--text-size-xl);
        line-height: 60px;
        margin-top: 32px;
        font-weight: bold;
    }
    & h3 {
        font-size: var(--text-size-l);
        line-height: 40px;
        margin-top: 40px;
        font-weight: bold;

        & + p {
            margin-top: 8px;
        }
    }
    & h4 {
        font-size: var(--text-size-m);
        line-height: 36px;
        margin-top: 40px;
        font-weight: bold;
    }
    & h5 {
        font-size: var(--text-size-sm);
        line-height: 30px;
        margin-top: 40px;
        font-weight: bold;
    }
    & h6 {
        font-size: var(--text-size-s);
        line-height: 24px;
        margin-top: 40px;
        font-weight: bold;
    }

    @media (max-width: 1024px) {
        left: 0;
    }
    @media ${device.tabletL} {
        max-width: none;
    }
`
const PreviewPage = () => {
    const [id, setId] = useState(null)
    const [data, setData] = useState(null)
    const [date, setDate] = useState(null)
    const end_point_url = 'https://amammustofa.com/items/articles/'

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
            setDate(new Date(data.data.publish_date).toString().split(' '))
            return data
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

            <SectionContainer position="relative">
                <HeroContainer>
                    <Box
                        max_width="38.4rem"
                        width="100%"
                        mr="2.4rem"
                        tabletL={{ max_width: '100%' }}
                    >
                        <PublishDate
                            mb="16px"
                            size="var(--text-size-xs)"
                            dangerouslySetInnerHTML={{
                                __html: date ? date[2] + ' ' + date[1] + ' ' + date[3] : '',
                            }}
                        />
                        <Header as="h1" type="page-title">
                            {data?.data.article_title}
                        </Header>
                        <MinsToRead
                            size="var(--text-size-xs)"
                            mt="16px"
                            dangerouslySetInnerHTML={{
                                __html: data?.data.minutes_to_read + ' min read',
                            }}
                        />
                        <Show.Mobile>
                            <SideBarContainer>
                                <ArticleTagContainer
                                    max-width="328px"
                                    width=" 100%"
                                    tabletL={{ mt: '24px', mb: '40px' }}
                                >
                                    {data?.data.article_tags.map((tag) => {
                                        return <Tag key={tag}>{tag}</Tag>
                                    })}
                                </ArticleTagContainer>
                            </SideBarContainer>
                        </Show.Mobile>

                        <Show.Desktop>
                            {data?.data.author && (
                                <WriterContainer mt="4rem">
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
                                        <WrittenbyText>{localize('Written by')}</WrittenbyText>
                                        <AuthorText
                                            dangerouslySetInnerHTML={{
                                                __html: data?.data.author,
                                            }}
                                        />
                                    </Box>
                                </WriterContainer>
                            )}
                        </Show.Desktop>
                    </Box>

                    <HeroImageContainer tabletL={{ mt: '24px' }}>
                        <img
                            src={'https://amammustofa.com/assets/' + data?.data.main_image + '.png'}
                        />
                    </HeroImageContainer>
                </HeroContainer>

                <BodyContainer
                    p="0 12rem"
                    tabletL={{ p: '0 16px' }}
                    laptop={{ padding: '7.8rem 2.4rem 14.6rem 2rem' }}
                >
                    <Show.Mobile>
                        {data?.data.author && (
                            <WriterContainer tabletL={{ mt: '24px', mb: '40px' }}>
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
                                    <WrittenbyText>{localize('Written by')}</WrittenbyText>
                                    <AuthorText
                                        dangerouslySetInnerHTML={{
                                            __html: data?.data.author,
                                        }}
                                    />
                                </Box>
                            </WriterContainer>
                        )}
                    </Show.Mobile>
                    <Show.Desktop>
                        <SideBarContainer>
                            <ArticleTagContainer max-width="25.5rem" width=" 100%" mr="13.8rem">
                                {data?.data.article_tags.map((tag) => {
                                    return <Tag key={tag}>{tag}</Tag>
                                })}
                            </ArticleTagContainer>
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
                        <FooterContainer>
                            <img
                                src={
                                    'https://amammustofa.com/assets/' +
                                    data?.data.footer_banner_bg_image +
                                    '.png'
                                }
                            />
                        </FooterContainer>
                    </Flex>
                </BodyContainer>
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(PreviewPage)
