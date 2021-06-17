import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Text, Header } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

const StyledFlex = styled(Flex)`
    border-radius: 8px;
    height: 300px;
    border: 1px solid var(--color-grey-8);
    overflow: hidden;
    transition: transform 0.3s;
    cursor: pointer;

    &:hover {
        transform: translateY(-1.1rem) scale(1.02);
    }

    @media ${device.tabletL} {
        flex-direction: column;
        height: auto;
        max-width: 790px;
    }
    @media (max-width: 879px) {
        max-width: 384px;
    }
`

const ImageWrapper = styled.div`
    display: flex;
    height: 300px;
    width: 55%;

    @media ${device.tabletL} {
        width: 100%;
    }
`

const StyledCategories = styled(Text)`
    width: fit-content;
    border-radius: 8px;
    background-color: var(--color-blue-8);
    color: var(--color-blue-9);
    padding: 1px 8px;
    line-height: 20px;
    margin-bottom: 8px;
`

const FeaturedContentWrapper = styled(Flex)`
    @media ${device.tabletL} {
        width: 100%;
    }
    @media (max-width: 879px) {
        padding: 16px 24px;
    }
`

const FeaturedArticle = ({ article_data }) => {
    return (
        <StyledFlex jc="flex-start" mt="96px">
            <ImageWrapper>
                <img
                    src="https://source.unsplash.com/random/10"
                    alt={localize('Video card')}
                    width="100%"
                    style={{ objectFit: 'cover' }}
                />
            </ImageWrapper>
            <FeaturedContentWrapper fd="column" p="35px 40px" width="45%">
                <Flex jc="flex-start" height="auto">
                    <StyledCategories weight="bold" size="14px">
                        {article_data[0].category}
                    </StyledCategories>
                    <Text color="grey-5" ml="8px" size="14px">
                        {`• ${article_data[0].reading_time} min read`}
                    </Text>
                </Flex>
                <Header as="h3" size="32px">
                    {article_data[0].title}
                </Header>
                <Text size="14px" mt="8px" color="grey-5">
                    {article_data[0].description}
                </Text>
            </FeaturedContentWrapper>
        </StyledFlex>
    )
}

FeaturedArticle.propTypes = {
    article_data: PropTypes.arrayOf(Object),
}

export default FeaturedArticle
