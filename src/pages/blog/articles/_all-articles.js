import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ArticleCard from './_article-card'
import FeaturedArticle from './_featured-article'
import { Flex } from 'components/containers'
import { Text, LocalizedLinkText } from 'components/elements'
import device from 'themes/device'
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

const Container = styled(Flex)`
    width: 90%;
    max-width: 1200px;

    @media ${device.desktopL} {
        max-width: 1600px;
    }
    @media ${device.tabletL} {
        width: 100%;
        padding: 0 16px;
    }
`

const AllArticles = ({ article_data }) => {
    return (
        <Container m="0 auto" fd="column" ai="center">
            <Flex jc="flex-start" ai="center" mt="40px">
                <LocalizedLinkText to="/blog/" color="grey-5">
                    Home
                </LocalizedLinkText>
                <img
                    src={RightArrow}
                    alt="Right arrow"
                    height="16"
                    width="16"
                    style={{ margin: '0 8px' }}
                />
                <Text>All articles</Text>
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
