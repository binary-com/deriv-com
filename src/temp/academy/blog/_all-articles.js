import React from 'react'
import PropTypes from 'prop-types'
import { StyledImg, Container, VideoGrid } from '../common/_styles'
import ArticleCard from './_article-card'
import FirstArticle from './_first-article'
import { Flex } from 'components/containers'
import { Text, LocalizedLinkText } from 'components/elements'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'

const AllArticles = ({ article_data }) => {
    return (
        <Container m="0 auto" fd="column" ai="center">
            <Flex jc="flex-start" ai="center" mt="40px">
                <LocalizedLinkText to="/academy/" color="grey-5">
                    Home
                </LocalizedLinkText>
                <StyledImg src={RightArrow} height="16" width="16" />
                <Text>All articles</Text>
            </Flex>
            <FirstArticle item={article_data[0]} />
            <VideoGrid m="40px 0">
                {article_data.slice(1).map((item) => {
                    return <ArticleCard key={item.id} item={item} />
                })}
            </VideoGrid>
        </Container>
    )
}

AllArticles.propTypes = {
    article_data: PropTypes.arrayOf(PropTypes.object),
}

export default AllArticles
