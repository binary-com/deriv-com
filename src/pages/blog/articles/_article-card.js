import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

const VideoCardWrapper = styled.div`
    max-width: 384px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    position: relative;
    height: auto;
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--color-grey-8);
    background: var(--color-white);
    transition: transform 0.3s;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        transform: translateY(-1.1rem) scale(1.02);
    }

    @media ${device.mobileL} {
        width: 100%;
    }
`

const ImageWrapper = styled.div`
    height: 200px;
    width: 384px;
    position: relative;
    z-index: 1;
    overflow: hidden;

    @media ${device.mobileL} {
        width: 100%;
    }
`

const StyledCategories = styled(Text)`
    width: fit-content;
    border-radius: 8px;
    background-color: var(--color-blue-10);
    color: var(--color-blue-9);
    padding: 1px 8px;
    line-height: 20px;
    margin: 0 8px 8px 0;
`

const ContentWrapper = styled.div`
    padding: 16px 24px;
`

const ArticleCard = ({ item }) => {
    return (
        <VideoCardWrapper>
            <ImageWrapper>
                <img
                    src={item.image}
                    alt={localize('Video card')}
                    width="100%"
                    style={{ objectFit: 'contain' }}
                />
            </ImageWrapper>
            <ContentWrapper>
                <Flex jc="flex-start" fw="wrap">
                    {item.category.slice(0, 2).map((item_category) => (
                        <StyledCategories weight="bold" size="14px" key={item_category}>
                            {item_category}
                        </StyledCategories>
                    ))}
                    {item.category.length > 2 && (
                        <StyledCategories weight="bold" size="14px">
                            {`+${item.category.slice(2).length.toString()}`}
                        </StyledCategories>
                    )}
                    <Text color="grey-5" size="14px">
                        {`• ${item.reading_time} min read`}
                    </Text>
                </Flex>
                <Header as="h3" size="20px">
                    {item.title}
                </Header>
                <Text size="14px" mt="8px" color="grey-5">
                    {item.description}
                </Text>
            </ContentWrapper>
        </VideoCardWrapper>
    )
}

ArticleCard.propTypes = {
    item: PropTypes.arrayOf(Object),
    openVideo: PropTypes.func,
}

export default ArticleCard
