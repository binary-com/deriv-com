import React, { useCallback, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useQueryParams, StringParam } from 'use-query-params'
import { matchSorter } from 'match-sorter'
import { dataFilter } from '../components/utility'
import VideoParentWrapper from './_video-parent-wrapper'
import {
    GetPaginatedArticles,
    getPaginationItemCountText,
    getTotalArticleText,
} from './_pagination'
import { Container, SEO, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { LinkButton } from 'components/form'
import { cms_assets_end_point } from 'common/constants'
import { unslugify, slugify } from 'common/utility'
import { DerivStore } from 'store'
import device from 'themes/device'

const StyledHeaderWrapper = styled(Flex)`
    box-shadow: inset 0 -1px 0 #f2f3f4;
`
const AllArticleButton = styled(LinkButton)`
    margin-top: 10px;
    width: fit-content;

    &:hover {
        cursor: pointer;
    }

    @media ${device.tablet} {
        margin-top: 0;
    }
`
const StyledTitle = styled.span`
    color: var(--color-black-3);
`

const SearchPage = () => {
    // search result states
    const { academy_data } = useContext(DerivStore)
    const [full_article_link, setFullArticleLink] = useState('')
    const [full_video_link, setFullVideoLink] = useState('')
    const [search_result, setSearchResult] = useState({
        total_article: 0,
        total_video: 0,
        article_result: [],
        video_result: [],
    })

    // pagination states
    const [page_number, setPageNumber] = useState(0)
    const items_per_page = 10
    const pages_visited = page_number * items_per_page
    const page_count = Math.ceil(search_result.article_result.length / items_per_page)

    // query params
    const [query, setQuery] = useQueryParams({
        q: StringParam,
        type: StringParam,
        category: StringParam,
        t: StringParam,
    })
    const { q: search_query, type: items_type, category: category_type, t: title_params } = query

    // video player states
    const [show, setShow] = useState(false)
    const [play_video_id, setPlayVideoId] = useState('')
    const play_video_src = `${cms_assets_end_point}${play_video_id}`

    useEffect(() => {
        const video_track = academy_data.videos.find(
            (item) => slugify(item.video_title) == title_params,
        )?.video_file.id
        if (video_track) openVideo(video_track, title_params)
    }, [])

    // video player functions
    const openVideo = (track_id: string, video_title: string) => {
        setPlayVideoId(track_id)
        setQuery({ ...query, t: video_title })
        setShow(true)
    }

    const closeVideo = () => {
        setShow(false)
        setPlayVideoId('')
        setQuery({ ...query, t: undefined })
    }

    // combined data
    const combined_data = dataFilter([...academy_data.blog, ...academy_data.videos])

    useEffect(() => {
        if (search_query && !items_type) {
            getSearchResult(search_query)
            setFullArticleLink(`/academy/search?q=${search_query}&type=article`)
            setFullVideoLink(`/academy/search?q=${search_query}&type=video`)
        }

        if (items_type) {
            if (search_query) {
                const result_arr = getSearchResult(search_query)
                getSearchResultBasedOnType(result_arr, items_type)
            } else if (category_type) {
                const category_result = getFilterResult(category_type)
                getSearchResultBasedOnType(category_result, items_type)
            }
        }

        if (category_type && !items_type) {
            getFilterResult(category_type)
            setFullArticleLink(`/academy/search?category=${category_type}&type=article`)
            setFullVideoLink(`/academy/search?category=${category_type}&type=video`)
        }
    }, [query])

    // filter functions
    const filteredBaseOnType = useCallback(
        (obj) => {
            const article_arr = []
            const video_arr = []

            obj.forEach((items) => {
                if (items.blog_title) {
                    article_arr.push(items)
                } else if (items.video_title) {
                    video_arr.push(items)
                }
            })

            setSearchResult({
                // slice video result to two as for default
                video_result: items_type ? video_arr : video_arr.slice(0, 2),
                article_result: article_arr,
                total_article: article_arr.length,
                total_video: video_arr.length,
            })
        },
        [setSearchResult],
    )

    const getFilterResult = (type: string) => {
        let result = []

        if (type !== '') {
            result = matchSorter(combined_data, unslugify(type), {
                keys: ['tags.*.tags_id.tag_name'],
            })
        } else {
            result = null
        }

        filteredBaseOnType(result)

        return result
    }

    // search functions
    const getSearchResult = (q: string) => {
        let result = []

        if (q !== '') {
            result = matchSorter(combined_data, q, {
                keys: ['blog_title', 'video_title', 'tags.*.tags_id.tag_name'],
            })
        } else result = null

        filteredBaseOnType(result)

        return result
    }

    const getSearchResultBasedOnType = (obj: Record<string, unknown>[], params: string) => {
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

        filteredBaseOnType(result)

        return result
    }

    const getTotalSearchCount = () => {
        if (!items_type) {
            return search_result.total_article + search_result.total_video
        } else if (items_type === 'article') {
            return search_result.total_article
        } else return search_result.total_video
    }

    // This is a temporary solution without adding slug to the combined_filter_type
    // array from the constant file. This can be refactored in the future but
    // requires a change in the logic for both SearchBanner and search page.
    const getCategoryText = () => {
        switch (category_type) {
            case 'cfds':
                return 'CFDs'
            case 'dbot':
                return 'DBot'
            case 'dtrader':
                return 'DTrader'
            case 'deriv-mt5':
                return 'Deriv MT5'
            case 'deriv-go':
                return 'Deriv GO'
            default:
                return unslugify(category_type)
        }
    }

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
                        {search_query ? (
                            <>
                                <Header
                                    type="heading-3"
                                    as="h1"
                                    mt="4rem"
                                    color="grey-5"
                                    weight="normal"
                                >
                                    {getTotalSearchCount()} matching results for “
                                    <StyledTitle>{unslugify(search_query)}</StyledTitle>”
                                </Header>
                            </>
                        ) : (
                            <>
                                <Header as="h1" type="subtitle-2" mt="4rem" color="grey-5">
                                    Selection for
                                </Header>
                                <Header type="heading-2" as="span" color="black-3" weight="normal">
                                    {getCategoryText()}
                                </Header>
                            </>
                        )}
                    </Flex>
                    {((search_query && items_type == 'article') ||
                        (search_query && !items_type) ||
                        (category_type && !items_type) ||
                        (category_type && items_type == 'article')) && (
                        <Flex m="40px 0" fd="column">
                            <StyledHeaderWrapper jc="space-between">
                                <Header as="h3" type="subtitle-2">
                                    Articles
                                </Header>
                                {items_type ? (
                                    <Header as="span" type="paragraph-2" align="right">
                                        {getPaginationItemCountText(
                                            pages_visited,
                                            items_per_page,
                                            search_result.total_article,
                                        )}
                                    </Header>
                                ) : (
                                    <Header as="span" type="paragraph-2" align="right">
                                        {getTotalArticleText(search_result.total_article)}
                                    </Header>
                                )}
                            </StyledHeaderWrapper>

                            {search_result.article_result.length !== 0 ? (
                                <GetPaginatedArticles
                                    setPageNumber={setPageNumber}
                                    items_type={items_type}
                                    article_result={search_result.article_result}
                                    pages_visited={pages_visited}
                                    items_per_page={items_per_page}
                                    page_count={page_count}
                                />
                            ) : (
                                <Flex m="16px 0">
                                    <Header
                                        as="h3"
                                        type="subtitle-2"
                                        weight="normal"
                                        color="grey-5"
                                    >
                                        No results found
                                    </Header>
                                </Flex>
                            )}

                            {full_article_link && !items_type && search_result.total_article > 4 && (
                                <AllArticleButton tertiary="true" to={full_article_link}>
                                    All article results
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
                                <Header as="h3" type="subtitle-2">
                                    Videos
                                </Header>
                                <Header as="span" type="paragraph-2" align="right">
                                    <>
                                        {search_result.total_video > 1 && !items_type
                                            ? `1-2 of ${search_result.total_video} results`
                                            : `${search_result.total_video} results`}
                                    </>
                                </Header>
                            </StyledHeaderWrapper>

                            {search_result.video_result.length != 0 ? (
                                <>
                                    <VideoParentWrapper
                                        closeVideo={closeVideo}
                                        currentVideoItems={search_result.video_result}
                                        openVideo={openVideo}
                                        show={show}
                                        video_src={play_video_src}
                                    />
                                </>
                            ) : (
                                <Flex m="16px 0">
                                    <Header
                                        as="h3"
                                        type="subtitle-2"
                                        weight="normal"
                                        color="grey-5"
                                    >
                                        No results found
                                    </Header>
                                </Flex>
                            )}

                            {full_video_link && !items_type && search_result.total_video > 1 && (
                                <AllArticleButton tertiary="true" to={full_video_link}>
                                    All video results
                                </AllArticleButton>
                            )}
                        </Flex>
                    )}
                </Container>
            </Flex>
        </Layout>
    )
}

export default WithIntl()(SearchPage)
