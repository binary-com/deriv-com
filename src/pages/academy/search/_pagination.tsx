import React from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
import ArticleCard from './_article-card'
import { Flex } from 'components/containers'
import device from 'themes/device'

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

type GetPaginatedArticlesProps = {
    setPageNumber: React.Dispatch<React.SetStateAction<number>>
    items_type: string
    article_result: any[]
    pages_visited: number
    items_per_page: number
    page_count: number
}

export const GetPaginatedArticles = ({
    setPageNumber,
    items_type,
    article_result,
    pages_visited,
    items_per_page,
    page_count,
}: GetPaginatedArticlesProps) => {
    const handlePageChange = ({ selected }) => {
        setPageNumber(selected)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return !items_type ? (
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
}

export const getTotalArticleText = (total_article) =>
    total_article > 4 ? `1-5 of ${total_article} results` : `${total_article} results`

export const getPaginationItemCountText = (pages_visited, items_per_page, total_article) =>
    `${pages_visited + 1} - ${
        pages_visited + items_per_page < total_article
            ? pages_visited + items_per_page
            : total_article
    } of ${total_article} results`
