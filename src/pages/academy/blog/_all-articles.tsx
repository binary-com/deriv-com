import React, { useState, useRef } from 'react'
import { StyledImg, Container, VideoGrid } from '../common/_styles'
import ArticleCard from './_article-card'
import FirstArticle from './_first-article'
import { ArticleDataType } from './index'
import Pagination from 'components/elements/pagination'
import { Flex } from 'components/containers'
import { Text, LocalizedLinkText } from 'components/elements'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { queryParams } from 'common/utility'

type AllArticlesProps = {
    article_data: ArticleDataType
}

export type ItemType = ArticleDataType[0]

const AllArticles = ({ article_data }: AllArticlesProps) => {
    const url_page_number = Number(queryParams.get('page') || 1)

    // Our grid items change in 1333 width which is our tablet size
    const tablet_width = 1333
    const [is_mobile] = useBrowserResize()
    const [is_tablet] = useBrowserResize(tablet_width)
    const [current_page, setCurrentPage] = useState(url_page_number)
    const desktop_max_articles = 18
    const tablet_max_articles = 12
    const mobile_max_articles = 10
    const articles_per_page =
        (is_mobile && mobile_max_articles) ||
        (is_tablet && tablet_max_articles) ||
        desktop_max_articles

    const index_of_last_article = current_page * articles_per_page
    const index_of_first_article = index_of_last_article - articles_per_page
    const first_article = article_data[0]
    const all_articles_except_first = article_data.slice(1)
    const articles_for_pagination = all_articles_except_first.slice(
        index_of_first_article,
        index_of_last_article,
    )

    const myRef = useRef(null)

    const paginate = (page_number) => {
        myRef.current.scrollIntoView({ behavior: 'smooth' })
        setCurrentPage(page_number)
    }

    return (
        <Container ref={myRef} m="0 auto" fd="column" ai="center">
            <Flex jc="flex-start" ai="center" mt="40px">
                <LocalizedLinkText to="/academy/" color="grey-5">
                    Home
                </LocalizedLinkText>
                <StyledImg src={RightArrow} height="16" width="16" />
                <Text>All articles</Text>
            </Flex>
            {current_page === 1 && <FirstArticle item={first_article} />}
            <VideoGrid margin="40px 0">
                {articles_for_pagination.map((item) => {
                    return <ArticleCard key={item.id} item={item} />
                })}
            </VideoGrid>
            <Pagination
                items_per_page={articles_per_page}
                total_items={all_articles_except_first.length}
                paginate={paginate}
                current_page={current_page}
            />
        </Container>
    )
}

export default AllArticles
