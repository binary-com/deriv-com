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

type AllArticlesProps = {
    article_data: ArticleDataType
}

export type ItemType = ArticleDataType[0]

const AllArticles = ({ article_data }: AllArticlesProps) => {
    const [is_mobile] = useBrowserResize()
    const [is_tablet] = useBrowserResize(1333)
    const [current_page, setCurrentPage] = useState(1)
    const desktop_max_posts = 19
    const tablet_max_posts = 9
    const mobile_max_posts = 10
    const posts_per_page =
        (is_mobile && mobile_max_posts) || (is_tablet && tablet_max_posts) || desktop_max_posts

    const index_of_last_post = current_page * posts_per_page
    const index_of_first_post = index_of_last_post - posts_per_page
    const current_posts = article_data.slice(index_of_first_post, index_of_last_post)

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
            {current_page === 1 && <FirstArticle item={article_data[0]} />}
            <VideoGrid margin="40px 0">
                {current_posts.slice(1).map((item) => {
                    return <ArticleCard key={item.id} item={item} />
                })}
            </VideoGrid>
            <Pagination
                items_per_page={posts_per_page}
                total_items={article_data.length}
                paginate={paginate}
                current_page={current_page}
            />
        </Container>
    )
}

export default AllArticles
