import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ArticleCard from './_article-card'
import FeaturedArticle from './_featured-article'
import { Container, Flex } from 'components/containers'
import { Text, LocalizedLinkText } from 'components/elements'
import { localize } from 'components/localization'
import RightArrow from 'images/svg/black-right-arrow.svg'

const VideoGrid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    margin: 40px 0;
    grid-template-columns: repeat(auto-fit, minmax(288px, 384px));
    grid-row-gap: 40px;
    grid-column-gap: 24px;
    grid-template-rows: auto;
`

const AllArticles = ({ article_data }) => {
    return (
        <Container fd="column">
            <Flex jc="flex-start" ai="center" mt="4rem">
                <LocalizedLinkText to="/blog" color="grey-5">
                    {localize('Home')}
                </LocalizedLinkText>
                <img
                    src={RightArrow}
                    alt={localize('right arrow')}
                    height="16"
                    width="16"
                    style={{ margin: '0 8px' }}
                />
                <Text>{localize('All articles')}</Text>
            </Flex>
            <FeaturedArticle article_data={article_data} />
            <VideoGrid style={{ justifyContent: 'center' }}>
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
