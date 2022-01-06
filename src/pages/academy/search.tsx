import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { matchSorter } from 'match-sorter'
import ReactPaginate from 'react-paginate'
import { useQueryParams, StringParam } from 'use-query-params'
import VideoCard from './videos/_video-card'
import VideoPlayer from './components/_video-player'
import { Container, SEO, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize, LocalizedLink, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { LinkButton } from 'components/form'
import { convertDate, unslugify } from 'common/utility'
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

            @media (max-width: 768px) {
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
const VideoWrapper = styled(Flex)`
    width: auto;
    :nth-child(odd) {
        margin-right: 24px;
    }

    @media ${device.tablet} {
        width: 100%;

        :nth-child(odd) {
            margin-right: 0;
        }
    }
`
const StyledTitle = styled.span`
    color: var(--color-black-3);
`
const StyledLink = styled(LocalizedLink)`
    color: var(--color-black-3);
    text-decoration: none;
`

const SearchPage = () => {
    const { academy_data } = useContext(DerivStore)
    const [full_article_link, setFullArticleLink] = useState('')
    const [full_video_link, setFullVideoLink] = useState('')
    const [total_article, setTotalArticle] = useState(0)
    const [total_video, setTotalVideo] = useState(0)
    const [article_result, setArticleResult] = useState([])
    const [video_result, setVideoResult] = useState([])
    // paginate
    const [currentItems, setCurrentItems] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const [endOffset, setEndOffSet] = useState(0)
    const itemsPerPage = 10

    const [query] = useQueryParams({
        q: StringParam,
        type: StringParam,
        category: StringParam,
    })
    const { q: search_query, type: items_type, category: category_type } = query

    const combined_data = [...academy_data.blog, ...academy_data.videos]

    useEffect(() => {
        setItemOffset(0)

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

    // paginate
    useEffect(() => {
        setEndOffSet(itemOffset + itemsPerPage)
        items_type
            ? setCurrentItems(article_result.slice(itemOffset, endOffset))
            : setCurrentItems(article_result.slice(itemOffset, 5))

        setPageCount(Math.ceil(article_result.length / itemsPerPage))

        // console.log(`endOffset ${endOffset} - itemOffset ${itemOffset} - endOffset ${endOffset}`)
    }, [itemOffset, itemsPerPage, article_result, items_type])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % article_result.length
        setItemOffset(newOffset)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

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

        filteredBaseOnType(result)

        return result
    }

    const getTotalSearchCount = () => (items_type == 'article' ? total_article : total_video)

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
                                    {unslugify(category_type)}
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
                                        {`${itemOffset} - ${endOffset} of ${total_article} results`}
                                    </Header>
                                ) : (
                                    <Header as="span" type="paragraph-2" align="right">
                                        {total_article > 4
                                            ? `1-5 of ${total_article} results`
                                            : `${total_article} results`}
                                    </Header>
                                )}
                            </StyledHeaderWrapper>

                            {article_result.length !== 0 ? (
                                <>
                                    {!items_type ? (
                                        <ArticleWrapper currentItems={currentItems} />
                                    ) : (
                                        <>
                                            <ArticlePaginationWrapper>
                                                <ArticleWrapper currentItems={currentItems} />
                                                <ReactPaginate
                                                    previousLabel={'<'}
                                                    breakLabel={'...'}
                                                    nextLabel={'>'}
                                                    pageCount={pageCount}
                                                    onPageChange={handlePageClick}
                                                    containerClassName={'pagination-buttons'}
                                                    previousLinkClassName={'previous-button'}
                                                    breakClassName={'break-button'}
                                                    nextLinkClassName={'next-button'}
                                                    disabledClassName={'pagination-disabled'}
                                                    activeClassName={'pagination-active'}
                                                />
                                            </ArticlePaginationWrapper>
                                        </>
                                    )}
                                </>
                            ) : (
                                <Flex m="16px 0">
                                    <Header type="subtitle-2" weight="normal" color="grey-5">
                                        No results found
                                    </Header>
                                </Flex>
                            )}

                            {full_article_link && !items_type && total_article > 4 && (
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
                                    <Header type="subtitle-2" weight="normal" color="grey-5">
                                        No results found
                                    </Header>
                                </Flex>
                            )}

                            {full_video_link && !items_type && total_video > 1 && (
                                <AllArticleButton tertiary="true" to={full_video_link}>
                                    Go to all results
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

export const VideoParentWrapper = ({ currentVideoItems }) => {
    const [show, setShow] = useState(false)
    const [video_src, setVideoSrc] = useState('')
    const handleCloseVideo = () => setShow(false)
    const handleOpenVideo = (event, url) => {
        if (event.defaultPrevented) return
        setVideoSrc(url)
        setShow(true)
    }

    useEffect(() => {
        document.body.style.overflow = show ? 'hidden' : 'unset'
    }, [show])

    return (
        <>
            <Flex mt="24px" mb="32px" jc="flex-start" style={{ flexWrap: 'wrap' }}>
                {currentVideoItems.map((items) => {
                    return (
                        <VideoWrapper
                            key={items.video_file.id}
                            max_width="auto"
                            width="auto"
                            height="auto"
                            mb="32px"
                            onClick={(e) =>
                                handleOpenVideo(
                                    e,
                                    `https://cms.deriv.cloud/assets/${items.video_file.id}`,
                                )
                            }
                        >
                            <VideoCard key={items.video_file.id} item={items} />
                        </VideoWrapper>
                    )
                })}
            </Flex>
            {show && <VideoPlayer video_src={video_src} closeVideo={handleCloseVideo} />}
        </>
    )
}

export const ArticleWrapper = ({ currentItems }) => {
    return (
        <Flex fd="column" mt="24px">
            {currentItems.map((items, index) => {
                return <ArticleCard key={index} items={items} />
            })}
        </Flex>
    )
}

export const ArticleCard = ({ items }) => {
    const article_link = `/academy/blog/posts/${items.slug}/`

    return (
        <Flex mb="40px" jc="flex-start" tablet={{ mb: '24px' }}>
            <IconWrapper src={ArticleIcon} alt="article icon" />
            <Flex max-width="auto" ml="14px" fd="column">
                <Flex jc="space-between" tablet={{ fd: 'column', jc: 'flex-start' }}>
                    <StyledLink to={article_link}>
                        <Header type="paragraph-1" width="auto">
                            {items.blog_title}
                            {items.featured && (
                                <StarIconWrapper src={StarIcon} alt="featured post icon" />
                            )}
                        </Header>
                    </StyledLink>
                    <Header
                        type="paragraph-2"
                        color="grey-5"
                        weight="normal"
                        align="right"
                        width="auto"
                        tablet={{ align: 'left', mt: '4px' }}
                    >
                        {convertDate(items.published_date)}
                    </Header>
                </Flex>

                <Header type="paragraph-1" weight="normal">
                    {items.blog_description}
                </Header>
                <Flex jc="flex-start" height="auto" fw="wrap" mt="8px">
                    {items.tags &&
                        items.tags.slice(0, 4).map((tag) => (
                            <StyledCategories as="h4" type="paragraph-2" key={tag.id}>
                                {tag?.tags_id?.tag_name}
                            </StyledCategories>
                        ))}
                    {items.tags.length > 4 && (
                        <StyledCategories as="h4" type="paragraph-2">
                            {`+${items.tags.slice(4).length.toString()}`}
                        </StyledCategories>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}

VideoParentWrapper.propTypes = {
    currentVideoItems: PropTypes.object,
}

ArticleWrapper.propTypes = {
    currentItems: PropTypes.object,
}

ArticleCard.propTypes = {
    items: PropTypes.bool,
}
