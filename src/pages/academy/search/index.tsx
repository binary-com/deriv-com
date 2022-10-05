import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { matchSorter } from 'match-sorter'
import ReactPaginate from 'react-paginate'
import { useQueryParams, StringParam } from 'use-query-params'
import { useDataFilter } from '../components/_utility'
import VideoParentWrapper from './_video-parent-wrapper'
import ArticleCard from './_article-card'
import { Container, SEO, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { LinkButton } from 'components/form'
import { unslugify, queryParams } from 'common/utility'
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

const ArticlePaginationWrapper = styled(Flex)`
    flex-direction: column;

    .pagination-buttons {
        display: flex;
        justify-content: center;
        margin-top: 4rem;

        @media (max-width: 768px) {
            font-size: 2.4rem;
        }

        li {
            width: 32px;
            height: 32px;
            border: 1px solid #dfe3e8;
            border-radius: 4px;
            margin: 0 4px;

            a {
                cursor: pointer;
                width: 100%;
                height: 100%;
                font-size: 14px;
                line-height: 20px;
                color: var(--color-black-3);
                display: flex;
                justify-content: center;
                align-items: center;
            }

            @media ${device.tablet} {
                margin: 0 1rem;
            }
        }
        li:hover {
            color: var(--color-blue);
        }
    }
    .pagination-active {
        border: 1px solid var(--color-black-3) !important;
    }
    .pagination-disabled {
        background: #f2f3f4;
        opacity: 0.5;
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
    const [total_article, setTotalArticle] = useState(0)
    const [total_video, setTotalVideo] = useState(0)
    const [article_result, setArticleResult] = useState([])
    const [video_result, setVideoResult] = useState([])

    // pagination states
    const [page_number, setPageNumber] = useState(0)
    const items_per_page = 10
    const pages_visited = page_number * items_per_page
    const page_count = Math.ceil(article_result.length / items_per_page)

    // query params
    const [query] = useQueryParams({
        q: StringParam,
        type: StringParam,
        category: StringParam,
        t: StringParam,
    })
    const { q: search_query, type: items_type, category: category_type } = query

    // combined data
    const combined_data = useDataFilter([...academy_data.blog, ...academy_data.videos])

    useEffect(() => {
        // filter functions
        const filteredBaseOnType = (obj) => {
            const article_arr = []
            const video_arr = []

            obj.forEach((items) => {
                if (items.blog_title) {
                    article_arr.push(items)
                } else if (items.video_title) {
                    video_arr.push(items)
                }
            })

            // slice video result to two as for default
            items_type ? setVideoResult(video_arr) : setVideoResult(video_arr.slice(0, 2))

            setArticleResult(article_arr)
            setTotalArticle(article_arr.length)
            setTotalVideo(video_arr.length)
        }

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
                getFilterResult(category_type)
            }
        }

        if (category_type && !items_type) {
            getFilterResult(category_type)
            setFullArticleLink(`/academy/search?category=${category_type}&type=article`)
            setFullVideoLink(`/academy/search?category=${category_type}&type=video`)
        }
    }, [query])

    // pagination functions
    const handlePageChange = ({ selected }) => {
        setPageNumber(selected)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const getPaginatedArticles = () =>
        !items_type ? (
            <Flex fd="column" mt="24px">
                {article_result.slice(0, 5).map((items, index) => {
                    return <ArticleCard key={index} items={items} />
                })}
            </Flex>
        ) : (
            <>
                <ArticlePaginationWrapper>
                    <Flex fd="column" mt="24px">
                        {article_result
                            .slice(pages_visited, pages_visited + items_per_page)
                            .map((items, index) => {
                                return <ArticleCard key={index} items={items} />
                            })}
                    </Flex>
                    {page_count > 1 && (
                        <ReactPaginate
                            previousLabel={'<'}
                            breakLabel={'...'}
                            nextLabel={'>'}
                            pageCount={page_count}
                            onPageChange={handlePageChange}
                            containerClassName={'pagination-buttons'}
                            previousLinkClassName={'previous-button'}
                            breakClassName={'break-button'}
                            nextLinkClassName={'next-button'}
                            disabledClassName={'pagination-disabled'}
                            activeClassName={'pagination-active'}
                        />
                    )}
                </ArticlePaginationWrapper>
            </>
        )

    const getTotalArticleText = () =>
        total_article > 4 ? `1-5 of ${total_article} results` : `${total_article} results`

    const getTotalSearchCount = () => {
        if (!items_type) {
            return total_article + total_video
        } else if (items_type === 'article') {
            return total_article
        } else return total_video
    }

    const getPaginationItemCountText = () =>
        `${pages_visited + 1} - ${
            pages_visited + items_per_page < total_article
                ? pages_visited + items_per_page
                : total_article
        } of ${total_article} results`

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

    const renderArticle = () => {
        return (
            <>
                <StyledHeaderWrapper jc="space-between">
                    <Header as="h3" type="subtitle-2">
                        Articles
                    </Header>
                    {items_type ? (
                        <Header as="span" type="paragraph-2" align="right">
                            {getPaginationItemCountText()}
                        </Header>
                    ) : (
                        <Header as="span" type="paragraph-2" align="right">
                            {getTotalArticleText()}
                        </Header>
                    )}
                </StyledHeaderWrapper>

                {article_result.length !== 0 ? (
                    getPaginatedArticles()
                ) : (
                    <Flex m="16px 0">
                        <Header as="h3" type="subtitle-2" weight="normal" color="grey-5">
                            No results found
                        </Header>
                    </Flex>
                )}

                {full_article_link && !items_type && total_article > 4 && (
                    <AllArticleButton tertiary to={full_article_link}>
                        All article results
                    </AllArticleButton>
                )}
            </>
        )
    }

    const renderVideo = () => {
        return (
            <>
                <StyledHeaderWrapper jc="space-between">
                    <Header as="h3" type="subtitle-2">
                        Videos
                    </Header>
                    <Header as="span" type="paragraph-2" align="right">
                        <>
                            {total_video > 1 && !items_type
                                ? `1-2 of ${total_video} results`
                                : `${total_video} results`}
                        </>
                    </Header>
                </StyledHeaderWrapper>

                {video_result.length != 0 ? (
                    <>
                        <VideoParentWrapper currentVideoItems={video_result} />
                    </>
                ) : (
                    <Flex m="16px 0">
                        <Header as="h3" type="subtitle-2" weight="normal" color="grey-5">
                            No results found
                        </Header>
                    </Flex>
                )}

                {full_video_link && !items_type && total_video > 1 && (
                    <AllArticleButton tertiary to={full_video_link}>
                        All video results
                    </AllArticleButton>
                )}
            </>
        )
    }

    const isShowArticleFirst = () => {
        const type = queryParams.get('type')
        return type === 'article' || !type
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

                    {isShowArticleFirst() ? (
                        <>
                            <Flex m="40px 0" fd="column">
                                {renderArticle()}
                            </Flex>

                            <Flex m="40px 0" fd="column">
                                {renderVideo()}
                            </Flex>
                        </>
                    ) : (
                        <>
                            <Flex m="40px 0" fd="column">
                                {renderVideo()}
                            </Flex>

                            <Flex m="40px 0" fd="column">
                                {renderArticle()}
                            </Flex>
                        </>
                    )}
                </Container>
            </Flex>
        </Layout>
    )
}

export default WithIntl()(SearchPage)
