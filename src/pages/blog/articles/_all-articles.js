import React from 'react'
import PropTypes from 'prop-types'
import { StyledImg, Container, VideoGrid } from '../common/_styles'
import ArticleCard from './_article-card'
import FeaturedArticle from './_featured-article'
import { Flex } from 'components/containers'
import { Text, LocalizedLinkText } from 'components/elements'
import RightArrow from 'images/svg/black-right-arrow.svg'

const AllArticles = ({ article_data }) => {
    return (
        <Container m="0 auto" fd="column" ai="center">
            <Flex jc="flex-start" ai="center" mt="40px">
                <LocalizedLinkText to="/blog/" color="grey-5">
                    Home
                </LocalizedLinkText>
                <StyledImg src={RightArrow} height="16" width="16" />
                <Text>All articles</Text>
            </Flex>
            <FeaturedArticle article_data={article_data} />
            <VideoGrid m="40px 0">
                {article_data.map((item) => {
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
