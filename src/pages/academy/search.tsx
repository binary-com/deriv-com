import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { matchSorter } from 'match-sorter'
import { useQueryParams, StringParam } from 'use-query-params'
import VideoCard from './videos/_video-card'
import VideoPlayer from './components/_video-player'
import { Container, SEO, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { LinkButton } from 'components/form'
import { convertDate, sentenceCase } from 'common/utility'
import { DerivStore } from 'store'
import device from 'themes/device'
import ArticleIcon from 'images/svg/blog/article-icon.svg'
import StarIcon from 'images/svg/blog/star-icon.svg'

const StyledHeaderWrapper = styled(Flex)`
    box-shadow: inset 0px -1px 0px #f2f3f4;
`
const IconWrapper = styled.img`
    width: 24px;
    height: 24px;
`
const StarIconWrapper = styled.img`
    width: 16px;
    height: 16px;
    margin-left: 8px;
    padding-top: 2px;
`
const StyledCategories = styled(Header)`
    width: fit-content;
    border-radius: 8px;
    background-color: var(--color-blue-10);
    color: var(--color-blue-9);
    padding: 2px 8px 0;
    margin: 0 8px 8px 0;
`
const AllArticleButton = styled(LinkButton)`
    margin-top: 10px;
    width: fit-content;

    &:hover {
        cursor: pointer;
    }

    @media ${device.laptopM} {
        width: 100%;
    }
`
const SearchPage = () => {
    const { academy_data } = useContext(DerivStore)
    const [search_result, setSearchResult] = useState([])
    const [show, setShow] = useState(false)
    const [video_src, setVideoSrc] = useState('')
    const [full_article_link, setFullArticleLink] = useState('')
    const [full_video_link, setFullVideoLink] = useState('')

    const handleCloseVideo = () => setShow(false)
    const handleOpenVideo = (event, url) => {
        if (event.defaultPrevented) return
        setVideoSrc(url)
        setShow(true)
    }

    useEffect(() => {
        document.body.style.overflow = show ? 'hidden' : 'unset'
    }, [show])

    const [query] = useQueryParams({
        q: StringParam,
        type: StringParam,
        category: StringParam,
    })
    const { q: search_query, type: items_type, category: category_type } = query

    const combined_data = [...academy_data.blog, ...academy_data.videos]

    useEffect(() => {
        // there are 3 params type
        /*  1) q is for query - optional
            2) type (either article or video) - optional
            3) category (category to be filtered) - optional

            if q
                - q

            if search from article page
                - q & type = article

            if search from video page
                - q & type = video

            if category from banner
                - category

            if category from article
                - category & type = article

            if category from video
                - category & type = video
        */

        if (search_query && !items_type) {
            const result_arr = getSearchResult(search_query)
            setFullArticleLink(`/academy/search?q=${search_query}&type=article`)
            setFullVideoLink(`/academy/search?q=${search_query}&type=video`)
            setSearchResult(result_arr)
        }

        if (items_type) {
            if (search_query) {
                const result_arr = getSearchResult(search_query)
                const filter_result = getSearchResultBasedOnType(result_arr, items_type)
                setSearchResult(filter_result)
            } else if (category_type) {
                const category_result = getFilterResult(category_type)
                const filtered_category_result = getSearchResultBasedOnType(
                    category_result,
                    items_type,
                )

                setSearchResult(filtered_category_result)
            }
        }

        if (category_type && !items_type) {
            const category_result = getFilterResult(category_type)
            setFullArticleLink(`/academy/search?category=${category_type}&type=article`)
            setFullVideoLink(`/academy/search?category=${category_type}&type=video`)
            setSearchResult(category_result)
        }
        // }
    }, [query])

    const getSearchResult = (q: string) => {
        let result
        if (q !== '') {
            result = matchSorter(combined_data, q, {
                keys: ['blog_title', 'video_title'],
            })
        } else result = null

        return result
    }

    const getSearchResultBasedOnType = (obj, params: string) => {
        const result = []
        let key_to_find: string

        if (params == 'article') {
            key_to_find = 'blog_title'
        } else if (params == 'video') {
            key_to_find = 'video_title'
        }

        obj.forEach((items) => {
            if (key_to_find in items) {
                result.push(items)
            }
        })

        return result
    }

    const getFilterResult = (type) => {
        let result

        if (type !== '') {
            result = matchSorter(combined_data, unSlugify(type), {
                keys: ['tags.*.tags_id.tag_name'],
            })
        } else {
            result = null
        }

        return result
    }

    const unSlugify = (text) => text.replace(/-/g, ' ').toUpperCase()

    useEffect(() => {
        show ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
    }, [show])

    return (
        <Layout type="academy" margin_top={'14.4'}>
            <SEO
                title={localize('Articles, trading guide and resources | Deriv')}
                description={localize(
                    "If you are looking for trading guide or tutorials, visit Deriv's trading academy and learn how to trade online.",
                )}
            />
            <Flex>
                <Container fd="column" style={{ maxWidth: '792px' }}>
                    <Flex fd="column">
                        <Header type="subtitle-2" mt="4rem" color="grey-5">
                            Selection for
                        </Header>
                        <Header type="heading-2" as="h2" color="black-3" weight="normal">
                            {category_type
                                ? sentenceCase(category_type)
                                : sentenceCase(search_query)}
                        </Header>
                    </Flex>
                    {((search_query && items_type == 'article') ||
                        (search_query && !items_type) ||
                        (category_type && !items_type) ||
                        (category_type && items_type == 'article')) && (
                        <Flex m="40px 0" fd="column">
                            <StyledHeaderWrapper jc="space-between">
                                <Header type="subtitle-2">Articles</Header>
                                <Header type="paragraph-2" align="right">
                                    1-5 of 15 results
                                </Header>
                            </StyledHeaderWrapper>
                            <Flex fd="column" mt="24px">
                                {search_result &&
                                    search_result.map((items, index) => {
                                        return (
                                            items.blog_title && (
                                                <Flex mb="40px" key={index} jc="flex-start">
                                                    <IconWrapper
                                                        src={ArticleIcon}
                                                        alt="article icon"
                                                    />
                                                    <Flex max-width="auto" ml="14px" fd="column">
                                                        <Flex jc="space-between">
                                                            <Header type="paragraph-1" width="auto">
                                                                {items.blog_title}
                                                                {items.featured && (
                                                                    <StarIconWrapper
                                                                        src={StarIcon}
                                                                        alt="featured post icon"
                                                                    />
                                                                )}
                                                            </Header>
                                                            <Header
                                                                type="paragraph-2"
                                                                color="grey-5"
                                                                weight="normal"
                                                                align="right"
                                                                width="auto"
                                                            >
                                                                {convertDate(items.published_date)}
                                                            </Header>
                                                        </Flex>

                                                        <Header type="paragraph-1" weight="normal">
                                                            {items.blog_description}
                                                        </Header>
                                                        <Flex
                                                            jc="flex-start"
                                                            height="auto"
                                                            fw="wrap"
                                                            mt="8px"
                                                        >
                                                            {items.tags &&
                                                                items.tags
                                                                    .slice(0, 4)
                                                                    .map((tag) => (
                                                                        <StyledCategories
                                                                            as="h4"
                                                                            type="paragraph-2"
                                                                            key={tag.id}
                                                                        >
                                                                            {tag?.tags_id?.tag_name}
                                                                        </StyledCategories>
                                                                    ))}
                                                            {items.tags.length > 4 && (
                                                                <StyledCategories
                                                                    as="h4"
                                                                    type="paragraph-2"
                                                                >
                                                                    {`+${items.tags
                                                                        .slice(4)
                                                                        .length.toString()}`}
                                                                </StyledCategories>
                                                            )}
                                                        </Flex>
                                                    </Flex>
                                                </Flex>
                                            )
                                        )
                                    })}
                                {search_result.length === 0 && (
                                    <Flex m="2rem">No results found</Flex>
                                )}
                            </Flex>
                            {full_article_link && !items_type && (
                                <AllArticleButton tertiary="true" to={full_article_link}>
                                    Go to all results
                                </AllArticleButton>
                            )}
                        </Flex>
                    )}

                    {((search_query && items_type == 'video') ||
                        (search_query && !items_type) ||
                        (category_type && !items_type) ||
                        (category_type && items_type == 'video')) && (
                        <Flex m="40px 0" fd="column">
                            <StyledHeaderWrapper jc="space-between">
                                <Header type="subtitle-2">Videos</Header>
                                <Header type="paragraph-2" align="right">
                                    1-2 of 6 results
                                </Header>
                            </StyledHeaderWrapper>
                            <Flex mt="24px" mb="32px" jc="flex-start">
                                {search_result &&
                                    search_result.map((items) => {
                                        return (
                                            items.video_title && (
                                                <Flex
                                                    key={items.video_file.id}
                                                    max_width="auto"
                                                    width="auto"
                                                    mr="24px"
                                                    onClick={(e) =>
                                                        handleOpenVideo(
                                                            e,
                                                            `https://cms.deriv.cloud/assets/${items.video_file.id}`,
                                                        )
                                                    }
                                                >
                                                    <VideoCard
                                                        key={items.video_file.id}
                                                        item={items}
                                                    />
                                                </Flex>
                                            )
                                        )
                                    })}
                            </Flex>
                            {full_video_link && !items_type && (
                                <AllArticleButton tertiary="true" to={full_video_link}>
                                    Go to all results
                                </AllArticleButton>
                            )}
                        </Flex>
                    )}
                    {show && <VideoPlayer video_src={video_src} closeVideo={handleCloseVideo} />}
                </Container>
            </Flex>
        </Layout>
    )
}

export default WithIntl()(SearchPage)
